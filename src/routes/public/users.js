import { Router } from 'express';
import models from '../../models';
const Traceroute = require('nodejs-traceroute');

const router = Router();

router.get("/info", async (req, res) => {
    res.json({
        userId:req.currUser.guid
    });

});

router.get("/latency", async (req, res) => {
    try {
        var result = {
            pid:'',
            destination:'',
            hop:[],
        };
        const tracer = new Traceroute();
        tracer
            .on('pid', (pid) => {
                result.pid = pid;
            })
            .on('destination', (destination) => {
                result.destination = destination;
            })
            .on('hop', (hop) => {
                result.hop.push(hop);
            })
            .on('close', (code) => {
                res.status(200).json({
                    success:true,
                    result
                });
            });

        tracer.trace('google.com');
    } catch (ex) {
        res.status(500).json({
            success:false,
        });
    }

});

router.get("/logout", async (req, res) => {
    let user = await models.user.update({
        loggedtime: new Date(),
    }, {
        where:{
            guid:req.currUser.guid
        },
    });
    console.log(user)
    res.status(200).json({
        success:true
    });

});
export default router;