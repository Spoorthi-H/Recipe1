const express = require("express");

const User = require("../models/User");
const {body, validationResult} = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

const SecreteKey = "This-isAVerySecreteKeyKeepitComplicated"



//creating task in database

router.post("/createuser",body('email','invalid email').isEmail(),
// password must be at least 5 chars long
body('password','invalid').isLength({ min: 5 }),async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt =await bcrypt.genSalt(10);
    const hashedpwd = await bcrypt.hash(req.body.password,salt);
  const email=req.body.email;
    const userinfo = await User.findOne({email});
    if(userinfo)
    {
      return res.status(404).json({err:"User Already Exists"});
    }
    try {
    const task = await User.create({
        name:req.body.name,
        password:hashedpwd,
        email:req.body.email,
      location:req.body.location})
      
        res.status(200).json(task);

    } catch (error) {
   
        res.status(500).json({msg:error.message})
    }

});

//Login user verifying email & pwd

router.post("/loginuser",body('email','invalid email').isEmail(),
// password must be at least 5 chars long
body('password','invalid').isLength({ min: 5 }),async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   
   const email = req.body.email;
    try {
    const userdata = await User.findOne({email});
    console.log(userdata);
      if(!userdata)
      {
       return res.status(400).json({err:"TRy logging in with correct credentials"});
      }
      
      const pwdcompare =  await bcrypt.compare(req.body.password,userdata.password);
      console.log(pwdcompare);
      if(!pwdcompare)
      {
       return res.status(400).json({ errors: "Not a User" });
      }
      const data = {
        user: {id:userdata.id}
      }
      const authtoken = jwt.sign(data,SecreteKey);
       
       return res.status(200).json({success:true,authToken:authtoken})

    } catch (error) {
   
        res.status(500).json({msg:error.message})
    }

});








module.exports = router;