import express from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/user.controller.js";

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
      .optional()
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  registerUser
);

export default router;
