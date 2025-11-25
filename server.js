// dotenv
import dotenv from "dotenv";
dotenv.config();

import express from "express";

// configs
import connectDB from "./configs/dbConfig.js";
// routes
import userRouter from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// dotenv
const PORT = process.env.PORT || 5000;

// Database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running port:${PORT}`);
});
