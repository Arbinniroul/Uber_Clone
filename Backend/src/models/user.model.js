import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {  
      type: String,
      required: true,
      minlength: [3, 'First name must be three characters or long']
    },
    lastName: {
      type: String,
      minlength: [3, 'Last name must be three characters or long']
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, 'Password must be at least 8 characters']
  },
  socketId: {
    type: String
  }
});

userSchema.methods.generateAuthTokens = function() {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || '24h'
  });
};

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function(password) {
  return await bcrypt.hash(password, 12); 
};

export const User = mongoose.model('User', userSchema);