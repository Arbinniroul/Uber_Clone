import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        minlength:[3,'First name must be three characters or long']

    },
    lastName:{
        type:String,
        minlength:[3,'First name must be three characters or long']

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[3,'First name must be three characters or long']        
    },
    password:{
        type:String,
        required:true,
        select:false,
        
    },
    socketId:{
        type:String,
    }

})
userSchema.methods.generateAuthTokens=function(){
    const token=jwt.sign({_id:this.id},process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)

}
userSchema.static.hasPassword=async function(password){
    return await bcrypt.hash(compare,10)

}
export const User=mongoose.model('User',userSchema)

