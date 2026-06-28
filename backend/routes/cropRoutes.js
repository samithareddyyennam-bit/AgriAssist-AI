const express = require("express");
const router = express.Router();

// Sample Crop Data
let crops = [
  {
    id: 1,
    name: "Rice",
    soil: "Alluvial Soil",
    season: "Kharif",
  },
  {
    id: 2,
    name: "Cotton",
    soil: "Black Soil",
    season: "Kharif",
  },
  {
    id: 3,
    name: "Groundnut",
    soil: "Red Soil",
    season: "Rabi",
  },
  {
    id: 4,
    name: "Maize",
    soil: "Black Soil",
    season: "Rabi",
  },
  {
    id: 5,
    name: "Wheat",
    soil: "Alluvial Soil",
    season: "Rabi",
  },
  {
    id: 6,
    name: "Sugarcane",
    soil: "Black Soil",
    season: "Kharif",
  },
];

// ==============================
// GET ALL CROPS
// ==============================
router.get("/", (req, res) => {
  res.status(200).json(crops);
});

// ==============================
// SEARCH CROPS
// Example:
// /api/crops/search?q=rice
// ==============================
router.get("/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const result = crops.filter((crop) =>
    crop.name.toLowerCase().includes(query)
  );

  res.status(200).json(result);
});

// ==============================
// CROP RECOMMENDATION
// Example:
// /api/crops/recommend?soil=Black Soil&season=Kharif
// ==============================
router.get("/recommend", (req, res) => {
  const { soil, season } = req.query;

  if (!soil || !season) {
    return res.status(400).json({
      success: false,
      message: "Please provide soil and season.",
    });
  }

  const crop = crops.find(
    (c) =>
      c.soil.toLowerCase() === soil.toLowerCase() &&
      c.season.toLowerCase() === season.toLowerCase()
  );

  if (!crop) {
    return res.status(404).json({
      success: false,
      message: "No suitable crop found.",
    });
  }

  res.status(200).json(crop);
});

// ==============================
// GET CROP BY ID
// ==============================
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const crop = crops.find((c) => c.id === id);

  if (!crop) {
    return res.status(404).json({
      message: "Crop not found",
    });
  }

  res.status(200).json(crop);
});

// ==============================
// ADD NEW CROP
// ==============================
router.post("/", (req, res) => {
  const { name, soil, season } = req.body;

  if (!name || !soil || !season) {
    return res.status(400).json({
      message: "Please provide name, soil and season.",
    });
  }

  const newCrop = {
    id: crops.length + 1,
    name,
    soil,
    season,
  };

  crops.push(newCrop);

  res.status(201).json({
    message: "Crop added successfully!",
    crop: newCrop,
  });
});

// ==============================
// UPDATE CROP
// ==============================
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const crop = crops.find((c) => c.id === id);

  if (!crop) {
    return res.status(404).json({
      message: "Crop not found",
    });
  }

  crop.name = req.body.name || crop.name;
  crop.soil = req.body.soil || crop.soil;
  crop.season = req.body.season || crop.season;

  res.status(200).json({
    message: "Crop updated successfully!",
    crop,
  });
});

// ==============================
// DELETE CROP
// ==============================
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = crops.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Crop not found",
    });
  }

  crops.splice(index, 1);

  res.status(200).json({
    message: "Crop deleted successfully!",
  });
});

module.exports = router;