import { User } from "../models/user.model.js";

import { validationResult } from "express-validator";
import { createUser } from "../service/user.service.js";

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