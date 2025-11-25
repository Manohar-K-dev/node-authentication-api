import mongoose from "mongoose";

const connectDB = async (res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    return res.status(500).json({ message: error.message });
    console.log("MongoDB Connection Failed");
  }
};

export default connectDB;
