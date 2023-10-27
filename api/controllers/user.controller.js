import bcryptjs from 'bcryptjs';
import { errHandeler } from '../utils/error.js';
import User from '../modules/user.module.js';



export const test=(req,res)=>{
    console.log("js")
    res.send("hey fucking dude???");
    console.log("js")
};

export const updateUserInfo=async  (req,res,next)=>{
    console.log("updateUserInfo");
    
    if (req.user.id !== req.params.id)
    return next(errHandeler (401, 'You can only update your own account!'));

  try {
    if (req.body.password) {
        // console.log("work+++++++++++>>>>>>>>>>>");
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
      // console.log( req.body.password );
    }
    console.log(req.params.id)
    // console.log(rest)


    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          phoneNumber:req.body.phoneNumber,
          password: req.body.password,
          address:req.body.address,
          zipcode:req.body.zipcode,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    console.log(updateUser)
    console.log("<<<<<<<<<<<<work>>>>>>>>>")

    const { password, ...rest } = updateUser._doc;

    res.status(200).json(rest);
  } catch (err) {
    console.error(err.message);
    next(err);
  }

};



