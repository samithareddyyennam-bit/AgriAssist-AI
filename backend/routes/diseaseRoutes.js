const express = require("express");
const router = express.Router();

const diseases = [
  {
    id: 1,
    crop: "Rice",
    disease: "Leaf Blast",
    symptoms: "Brown spots on leaves",
    prevention: "Use resistant varieties and fungicides."
  },
  {
    id: 2,
    crop: "Cotton",
    disease: "Bacterial Blight",
    symptoms: "Water-soaked leaf spots",
    prevention: "Use disease-free seeds."
  },
  {
    id: 3,
    crop: "Groundnut",
    disease: "Rust",
    symptoms: "Orange powder on leaves",
    prevention: "Spray recommended fungicides."
  },
  {
    id: 4,
    crop: "Maize",
    disease: "Leaf Spot",
    symptoms: "Small brown circular spots",
    prevention: "Crop rotation and fungicides."
  }
];

// Get all diseases
router.get("/", (req, res) => {
  res.json(diseases);
});

// Get disease by crop name
router.get("/:crop", (req, res) => {

  const crop = req.params.crop.toLowerCase();

  const result = diseases.filter(
    d => d.crop.toLowerCase() === crop
  );

  if(result.length===0){
      return res.status(404).json({
        message:"No disease found for this crop."
      });
  }

  res.json(result);

});

module.exports = router;