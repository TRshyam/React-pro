import jwt from 'jsonwebtoken';
import { errHandeler } from './error.js';

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);


  if (!token){
  console.log("work");
   return next(errHandeler(401, 'Unauthorized'));
  }

  jwt.verify(token, "234523", (err, user) => {
    // console.log("work");

    if (err) return next(errHandeler(403, 'Forbidden'));
    // console.log("work:::::::");

    console.log(user)


    req.user = user;
    next();
  });
};