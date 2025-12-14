// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

console.log("DEBUG: MONGO_URI =", process.env.MONGO_URI);

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("🎨 API is running and connected to MongoDB!");
});

// Routes
app.use("/api/products", productRoutes);

// Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(res.statusCode || 500).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

const PORT = 5001; // 💥 CHẠY CỐ ĐỊNH CỔNG 5001

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
