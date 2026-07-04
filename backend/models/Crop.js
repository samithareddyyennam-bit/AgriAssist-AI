const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  soil: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Crop", cropSchema);