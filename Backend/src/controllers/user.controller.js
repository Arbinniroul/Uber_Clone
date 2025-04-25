

import { validationResult } from "express-validator";
import { createUser } from "../service/user.service.js";
import { User } from "../models/user.model.js";
import { BlacklistToken } from "../models/blacklisttoken.model.js";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
   console.log(req.body)
    const { fullName, email, password } = req.body;
    

    const hashedPassword = await User.hashPassword(password); 
    
    const user = await createUser({
     firstName:fullName.firstName,
     lastName:fullName.lastName,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthTokens();
    res.status(201).json({ token, user });
  } catch (error) {
    next(error); 
  }
};
export const loginUser = async (req, res, next) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

  const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const token = user.generateAuthTokens();
    res.cookie("token", token);
    res.status(200).json({ token, user });
    
  }
   catch (error) {
      next(error);}

}
export const userProfile = async (req, res, next) => {
   res.status(200).json({ user: req.user });
}
export const logoutUser = async (req, res, next) => {
   try {

     const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
     
     if (token) {
       await BlacklistToken.create({ token });
     }
 

     res.clearCookie("token", {
       httpOnly: true,
       secure: process.env.NODE_ENV === 'production',
       sameSite: 'strict'
     }).status(200).json({ 
       success: true,
       message: "Logged out successfully" 
     });
 
   } catch (error) {
     next(error);
   }
 }