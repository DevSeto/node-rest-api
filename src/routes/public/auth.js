import { Router } from 'express';
import validate from 'validate.js';
import jwt from "jsonwebtoken";
import api from "../../../config/api.json";
import { emailConstraints, hashPasswordConstraints,phoneConstraints } from '../../validators/user';
import models from '../../models';

const router = Router();
const md5 = require('md5');

router.post("/signin", async (req, res) => {
  const where =  {
    password:md5(req.body.password),
    $or: [
      {
        email:
            {
              $eq: req.body.email
            }
      },
      {
        phone:
            {
              $eq: req.body.phone
            }
      }
    ]
  };
  let user = await models.user.update({
    loggedtime: new Date(),
  }, {
    where:where,
  });
  if (!user[0]) {
    return res.status(400).json({ errors: 'invalid username or password' })

  }
  user = await models.user.findOne({
    where:where,
  });
  var token = jwt.sign(user.toJSON(), api.secret, {
    expiresIn: 1440
  });
  res.json({
    user:user,token:token
  });
});

router.post("/signup", async (req, res) => {
    const validationResult = validate(req.body, {
      email: emailConstraints,
      phone: phoneConstraints,
      password: hashPasswordConstraints,
    });

    if (validationResult) {
      return res.status(400).json({ errors: validationResult })

    }
    let user = await Promise.all([
      models.user.create({
        email: req.body.email,
        password: md5(req.body.password),
        phone: req.body.phone
      }),
    ]).catch((e)=>{
      var messages = {
        messages:{},
        status:400
      };
      messages['messages'][e.errors[0].path] = e.errors[0].message;
      return messages;

    });
  if(user.status == 400){
    return res.status(400).json({
      errors: {
        backend: [user.messages]
      }
    });
  }
  var token = jwt.sign(user[0].toJSON(), api.secret, {
    expiresIn: 600000 
  });
  res.json({
    user:user[0].toJSON(),token:token
  });
});

export default router;