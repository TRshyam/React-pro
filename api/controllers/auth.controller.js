import User from '../modules/user.module.js';
import bcryptjs from 'bcryptjs';

// connecting the errorfunction
// import { errHandeler } from '../utils/error.js';


console.log("auth.route.jsssss")

export const signup=async  (req,res,next)=>{
    // console.log(req.body);

    const{ username,email,password}=req.body;
    const hashPassword=bcryptjs.hashSync(password,10);
    const newuser = new User({ username, email , password:hashPassword });
    
    try {
        await newuser.save();
        console.log("User saved successfully");
      } catch (error) {
        next(error)
        // error function 
        // console.log(errHandeler)
        // next(errHandeler(550,'due to function'));
      }
    // res.status(201).json({message:"User created"});

};