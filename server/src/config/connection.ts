import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "your-mongodb-connection-string";

mongoose.connect(MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: false,
});

export default mongoose.connection;
