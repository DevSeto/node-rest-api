
// get our mongoose model
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
import api from "../../config/api.json";
import models from '../models';

var verifyToken=  function (req, res,next) {
	var token = req.body.token || req.query.token || req.headers['token'];
	 if (token) {
		// verify secret and checks exp
		jwt.verify(token, api.secret, async function (err, currUser) {
			if (err) {
				return res.status(401).json({ errors: 'Invalid Access' })
			} else {
				req.currUser = currUser;
				const user = await models.user.findOne({
					where:{
						guid:currUser.guid,
						loggedtime:currUser.loggedtime
					},
				});
				if(!user){
					return res.status(401).json({ errors: 'Invalid Access' })
				}

				next();
			}
		});
	}
	 else {
		// send not found error
		 return res.status(401).json({ errors: 'Invalid Access' })
	}
};
module.exports=verifyToken;