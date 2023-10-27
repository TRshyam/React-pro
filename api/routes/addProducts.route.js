import express  from "express";
import { addProduct,getProducts } from "../controllers/addProduct.controller.js";
// import {getProducts}from '../controllers/addProduct.controller.js';


const route =express.Router();

route.post("/add_products",addProduct)
route.get('/products',getProducts)

export default route;
