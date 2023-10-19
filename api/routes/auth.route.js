import express from "express";
import { signup } from "../controllers/auth.controller.js";

const route= express.Router();

route.post('/signup',signup);
// console.log("auth.route.js")

export default route;