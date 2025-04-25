import express from "express";
import  dotenv  from "dotenv";
import cors from "cors"
import { connectDB } from "./connection/db.js";
dotenv.config();

connectDB();

const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello world")
})
export default app;