const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Profiles = require('../models/answer.model')

router.post("/answerdownload", (req,res) =>
{
    let lr=[]
    var sem=req.body.sem;
    var subject=req.body.subject;
    var chapter=req.body.chapter;
   
    Profiles.find({sem:sem ,subject:subject,chapter:chapter},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({imagePath:learn.imagePath,name:learn.name,chapter:learn.chapter,sem:learn.sem,subject:learn.subject}))
        res.send(lr);
        console.log(lr);
        
    })


});

module.exports = router;