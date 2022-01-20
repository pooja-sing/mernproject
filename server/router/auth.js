const jwt = require('jsonwebtoken');
const express = require('express');
const { exists } = require('../models/userSchema');
const router = express.Router();
const bycrpt = require('bcryptjs');

require('../db/conn');
var User =require('../models/userSchema');

router.get('/', (req, res) => {
    res.send('hello world from the server router');
});

router.post('/student',async (req,res) =>{

    //object disturing

    const {name, email, phone, work, password, cpassword}=req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"please filled the feild properly"})
    }
     // using promisse-------------
    // User.findOne({ email:email })
    // .then((userExists)=>{
    //     return res.status(422).json({error:"already exist"})

    // })
    //  let user = new User({name, email, phone, work, password, cpassword})

    //  user.save().then(()=>{
    //      res.status(201).json({message:"reagister sucssesfully"});
    //       }).catch((err)=>{
    //       res.status(500).json({err:"faild registered"})
    
    //  }).catch(err=>{
    //      console.log("err");
    //  })

    // aswait async
    try{
        const userExists = await User.findOne({ email:email });

        if(userExists){
            return res.status(422).json({ error:"already exist" })

        }else if(password!=cpassword){
            return res.status(422).json({ error:" password already exist" })

        }else{
            const  user = new User({name, email, phone, work, password, cpassword})

            //yha pr
    
            await user.save();
    
              res.status(201).json({message:"reagister sucssesfully"});  
    
         

        }
      
       }catch(err){
        console.log("err");
        

    }

});

//login route
router.post('/signin',async (req, res)=>{
 

    try{
        const {email, password}=req.body;
     
        if(!email || !password){
         return res.status(400).json({error: "plz field the data"});
        }
      

    
          const userLogin = await User.findOne({ email: email});
         // console.log(userLogin);
         if(userLogin){
            const isMatch =  await bycrpt.compare(password,userLogin.password)
            
            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
              res.status(400).json({message: "invalid"});
            }else{
              res.json({message: "user signin sucssesfully"});
            }
        
            
  

         }else{
            res.status(400).json({message: "invalid "});

         }

      
      

          }
          catch (err){
            console.log(err)

        }
    
});



module.exports = router; 