import express from "express";
import {signOut, signin, signup } from "../controllers/auth.controller.js";

const route= express.Router();


route.post('/signup',signup);
// console.log("auth.route.js")
route.post("/signin", signin);
route.get('/signout', signOut);


export default route;