import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import uploadRouter from "./Routes/uploadRoutes.js";

const server = express();

dotenv.config();

server.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const MongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Database");
  } catch (error) {
    console.log("error", error);
  }
};

server.use(express.json());

server.use("/file", uploadRouter);
server.use("/uploads", express.static("uploads"));

server.listen(process.env.PORT, () => {
  MongoConnect();
  console.log("Server is running in PORT :", process.env.PORT);
});
