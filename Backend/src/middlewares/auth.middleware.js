
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { BlacklistToken } from "../models/blacklisttoken.model.js";


export const authMiddleware = async (req, res, next) => {
    try {

        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        
        if (!token) {
            return res.status(401).json({ 
                success: false,
                message: "Unauthorized: No token provided" 
            });
        }


        const isBlackListed = await BlacklistToken.findOne({ token });
        if (isBlackListed) {
            return res.status(401).json({ 
                success: false,
                message: "Unauthorized: Token revoked" 
            });
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        

        req.user = await User.findById(decoded._id);
        if (!req.user) {
            return res.status(401).json({ 
                success: false,
                message: "Unauthorized: User not found" 
            });
        }


        next();
    } catch (error) {

        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ 
                success: false,
                message: "Unauthorized: Invalid token" 
            });
        }
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ 
                success: false,
                message: "Unauthorized: Token expired" 
            });
        }
        

        console.error('Authentication error:', error);
        return res.status(500).json({ 
            success: false,
            message: "Internal server error" 
        });
    }
};