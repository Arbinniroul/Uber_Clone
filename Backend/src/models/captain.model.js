import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const captainSchema=new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,'First name must be three characters or long']
        },
        lastName:{
            type:String,
            minlength:[3,'Last name must be three characters or long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/.+\@.+\..+/,'Please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:[8,'Password must be at least 8 characters']
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true
        },
        plate:{
            type:String,
            required:true
        },
        capacity:{
            type:Number,
            minlength:[1,'Capacity must be at least 1'],
            required:true
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','auto'],
            required:true
        }
    },
    location:{
        lat:{
            type:Number,

        },
        long:{
            type:Number,

        }
    }
})
captainSchema.methods.generateAuthTokens=function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES||'24h'
    });
}
captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}
export const Captain=mongoose.model('Captain',captainSchema);
  