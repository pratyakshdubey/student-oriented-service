const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

// Model
const Student = require('../model/student.model');

//type GET
//route /api/profile
//access Public

router.get("/profiler", (req,res)=>{
    Student.findById({Student:req.Student._id})
    .then(profile=> {
        if(!profile){
            return res.status(404).json({profilenotfound:"No Profile Found"})
        }
        res.json(profile)
    })
    .catch(err => console.log(err))
})

