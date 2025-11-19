import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI as string;

if (!MONGODB_URI) {
  throw new Error("Missing MONGO_URI in .env");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected:", db.connection.host);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}
