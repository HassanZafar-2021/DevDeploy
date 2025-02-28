import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    "❌ MongoDB URI is missing. Set MONGODB_URI in your .env file."
  );
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI) // No extra options needed in Mongoose 7+
  .then(() => console.log("✅ Successfully connected to MongoDB."))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

export default mongoose.connection;
