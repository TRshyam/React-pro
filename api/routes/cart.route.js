import express from "express";
import { addToCart, removeFromCart } from "../controllers/cart.controller.js";

const route= express.Router();

// const express = require('express');
// const route = express.Router();      

route.post('/add-to-cart',addToCart )
route.post('/remove-from-cart',removeFromCart )


export default route
