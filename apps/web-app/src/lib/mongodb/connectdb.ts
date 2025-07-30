import mongoose from "mongoose";
import { cn } from "../utils";

let isConnected = false;

const connectDb = async (): Promise<void> => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "Campus-Data",
    });

    isConnected = true;
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDb;
