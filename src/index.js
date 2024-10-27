// FIRST APPROACH

// import mongoose from 'mongoose';
// import express from 'express';
// import { DB_NAME } from './constants';

// const app = express();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGOUB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error: ",error);
//             throw error;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listenin on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error",error)
//         throw error;
//     }
// })();


//SECONG APPROACH


// require('dotenv').config({path:'./env})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB();