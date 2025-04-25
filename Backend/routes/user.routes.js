import express from "express";
import { body } from "express-validator";
import userController from "../controllers/user.controller";

const router=express.Router();
router,post('/register',[
    body('email').isEmail().withMessage('Invalid Error'),
    body('fullName').isLength({min:3}).withMessage('First name must be 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be 6 letters long')
],userController.registerUser)



export default router;
