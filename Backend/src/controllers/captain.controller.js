import { Captain } from "../models/captain.model.js";
import { createCaptain } from "../service/captain.service.js";
import { validationResult } from "express-validator";
export const registerCaptain=async (req, res,next) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { fullName, email, password, vehicle } = req.body;
        const isCaptainAlreadyExists = await Captain.findOne({email});
        if(isCaptainAlreadyExists) {
            return res.status(400).json({ message: "Captain already exists" });
        }
        const hashedPassword = await Captain.hashPassword(password);
        const captain = await createCaptain({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
           
        });
        const token = captain.generateAuthTokens();
        res.status(201).json({ token, captain });
    } catch (error) {
        next(error);
    }
}