import mongoose from "mongoose";

const connectDB = async (res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    return res.status(500).json({ message: error.message });
  }
};

export default connectDB;
