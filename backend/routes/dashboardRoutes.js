const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    weather: "Sunny",
    temperature: "30°C",
    crop: "Rice",
    soil: "Loamy Soil",
    season: "Kharif",
  });
});

module.exports = router;