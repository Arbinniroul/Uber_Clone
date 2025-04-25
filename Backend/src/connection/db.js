import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true 
    }).then(()=>console.log("MONGODB connected"));
    
  } catch (err) {
    console.error('Connection error:', err);
  }
};
