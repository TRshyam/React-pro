import express from "express";
import {test, updateUserInfo}from '../controllers/user.controller.js';
import { verifyUser } from "../utils/verifyUser.js";


const route= express.Router();

route.get('/test',test);
// console.log("auth.route.js")
route.post('/update/:id',verifyUser,updateUserInfo)

export default route;