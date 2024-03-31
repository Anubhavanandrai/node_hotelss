// import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_URL;
  

const dbconnect = mongoose
  .connect(URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default dbconnect;
