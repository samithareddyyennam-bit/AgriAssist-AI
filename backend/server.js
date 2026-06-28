const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cropRoutes = require("./routes/cropRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/crops", cropRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/diseases", diseaseRoutes);
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", (req, res) => {
res.send("Welcome to AgriAssist AI Backend 🌱");
});

// Test API
app.get("/api", (req, res) => {
res.json({
success: true,
message: "Backend is running successfully!"
});
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// Start Server
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
