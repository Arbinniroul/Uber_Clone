import express from "express";
import { body } from "express-validator";
import { loginUser, logoutUser, registerUser, userProfile } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post(
  "/register",
  [
    body("fullName.firstName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("fullName.lastName")
      .trim()
      .optional(),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);
router.post('/login',[
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6characters')
    ],loginUser
    )
router.get('/profile',authMiddleware,userProfile);

router.get('/logout',authMiddleware,logoutUser);

export default router;
