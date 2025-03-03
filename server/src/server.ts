import express from "express";
import db from "./config/connection.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static("../client/dist"));

app.use(routes);

// Ensure database connection is established before starting the server
db.once("open", () => {
  console.log("✅ Database connected successfully.");
  app.listen(PORT, () =>
    console.log(`🌍 Now listening on http://localhost:${PORT}`)
  );
});

db.on("error", (err) => {
  console.error("❌ Database connection error:", err);
});
