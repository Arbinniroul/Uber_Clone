import express from 'express';
import { body } from 'express-validator';
import { registerCaptain } from '../controllers/captain.controller.js';
const router = express.Router();

router.post('/register',[
    body('fullName.firstName')
        .trim()
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters'),
    body('fullName.lastName')
        .trim()
        .optional(),
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please provide a valid email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle, or auto'),
],registerCaptain);

export default router;