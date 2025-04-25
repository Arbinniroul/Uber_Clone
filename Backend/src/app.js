import express from "express";
import  dotenv  from "dotenv";
import cors from "cors"
import { connectDB } from "./connection/db.js";
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
dotenv.config();

connectDB();

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/user',userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello world")
})
export default app;