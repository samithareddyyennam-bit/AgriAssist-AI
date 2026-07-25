const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({
      message: "Please provide a city name."
    });
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    res.json({
  city: response.data.name,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  weather: response.data.weather[0].main,

  crop: "Rice",
  soil: "Loamy Soil",
  season: "Kharif"
});

 } catch (error) {
  console.log(error.response?.data || error.message);

  res.status(500).json({
    message: "Unable to fetch weather.",
    error: error.response?.data || error.message
  });
}
});

module.exports = router;