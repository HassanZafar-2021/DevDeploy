import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://rzafar:Luigi3301@cluster0.xq8rh.mongodb.net/DevDeploy-DB?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  console.error(
    "❌ MongoDB URI is missing. Set MONGODB_URI in your .env file."
  );
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI, {
    tls: true, // Enforce secure TLS connection
    tlsAllowInvalidCertificates: false, // Ensures valid TLS handshake
  })
  .then(() => {
    console.log("✅ Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

export default mongoose.connection;
