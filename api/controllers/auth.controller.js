import User from '../modules/user.module.js';
import bcryptjs from 'bcryptjs';
console.log("auth.route.jsssss")

export const signup=async  (req,res)=>{
    // console.log(req.body);

    const{ username,email,password}=req.body;
    const hashPassword=bcryptjs.hashSync(password,10);
    const newuser = new User({ username, email , password:hashPassword });
    
    try {
        await newuser.save();
        console.log("User saved successfully");
      } catch (error) {
        res.status(500).json(error.message)
        console.error("Error saving user:", error);
      }
    res.status(201).json({message:"User created"});

};