import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// mongoose.connect(process.env.MONGO)
mongoose.connect("mongodb+srv://shyam0007:HQPXyDYP7Rfove76@react-e.hmomnpa.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})
const app= express();

app.listen(3000,()=>{
    console.log("Server is runnding in 3000")
})