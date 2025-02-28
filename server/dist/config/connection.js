import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error("❌ MongoDB URI is missing. Set MONGODB_URI in your .env file.");
    process.exit(1);
}
mongoose.connect(MONGODB_URI, {
    tls: true, // Ensure TLS connection
    tlsAllowInvalidCertificates: false, // Enforce valid certificates
});
mongoose.connection.on("connected", () => {
    console.log("✅ Successfully connected to MongoDB.");
});
mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
});
export default mongoose.connection;
