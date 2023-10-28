import User from '../modules/user.module.js';
import bcryptjs from 'bcryptjs';

import { errHandeler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


// console.log("auth.route.jsssss")

export const signup=async  (req,res,next)=>{
    // console.log(req.body);

    const{ username,phoneNumber,email,password}=req.body;
    const hashPassword=bcryptjs.hashSync(password,10);
    const newuser = new User({ username ,phoneNumber, email , password:hashPassword });
    
    try {
        await newuser.save();
        console.log("User saved successfully");
        res.status(201).json({message:"User created"});

      } catch (error) {
        next(error)
        console.log(error);
      }
    // res.status(201).json({message:"User created"});

};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errHandeler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errHandeler(401, 'Wrong credentials!'));
    const token = jwt.sign({ id: validUser._id },"234523" );
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};