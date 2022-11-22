const router = require("express").Router();
const Club=require("../models/club");
const Event=require("../models/event");


router.post("/search", async (req, res)=>{
    
    const keywords= req.body.keyword
    Club.find({ "clubname": { "$regex": keywords, "$options": "i" } }, (err, clubs)=>{
        if(err){
            console.log(err)
        }

        Event.find({ "eventname": { "$regex": keywords, "$options": "i" } }, (err, events)=>{
            if(err){
                console.log(err)
            }
            res.json({
                "clubs": clubs,
                "events": events,
            })
            })
        })

})

module.exports=router