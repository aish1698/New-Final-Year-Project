const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Profiles = require('../models/profile.model')
var ObjectId= require("mongodb").ObjectID;


router.post("/chapter", (req,res) =>
{
    let lr=[]
    var sem=req.body.sem;
    var subject=req.body.subject;
    
   
    Profiles.find({sem:sem ,subject:subject},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({chapter:learn.chapter}))
        res.send(lr);
        console.log(lr);
        
    })


});



router.post("/learningstudent", (req,res) =>
{
    let lr=[]
    var sem=req.body.sem;
    var subject=req.body.subject;
    var chapter=req.body.chapter;
   
    Profiles.find({sem:sem ,subject:subject,chapter:chapter},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({imagePath:learn.imagePath,name:learn.name,sem:learn.sem,_id:learn._id,subject:learn.subject}))
        res.send(lr);
        console.log(lr);
        
    })


});
router.post("/list", (req,res) =>
{
    let lr=[]
    var userid=req.body.userid;
    var sem= req.body.sem;
    var subject=req.body.subject;
   
    Profiles.find({sem:sem ,subject:subject,userid:userid},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({imagePath:learn.imagePath,name:learn.name,sem:learn.sem,_id:learn._id,subject:learn.subject,chapter:learn.chapter}))
        res.send(lr);
        console.log(lr);
        
    })


});
router.post("/updatedoc", (req,res) =>
{
    let lr=[]
    var userid=req.body.userid;
    var sem= req.body.sem;
    var subject=req.body.subject;
    var name=req.body.name;
    Profiles.find({sem:sem ,subject:subject,userid:userid,name:name},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({id:learn._id,sem:learn.sem,subject:learn.subject,chapter:learn.chapter,imagePath:learn.imagePath,name:learn.name}))
        res.send(lr);
        console.log(lr);
        
    })


});
router.delete("/profile/:id", (req,res)=> {
   
    Profiles.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code: 200, message: 'Material deleted successfully', deleteProfiles: data})
        }
        else{
        console.log(err);
        }


    });
});


// {
//     var id= req.body.id;
//     Profiles.deleteOne({_id:id},function(err,learn){
//         if (err) console.log(err)
        
//         console.log("deleted");
        
//     })





module.exports = router;