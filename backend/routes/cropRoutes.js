const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// ==============================
// GET ALL CROPS
// ==============================
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM crops ORDER BY id");

    res.status(200).json(result.rows);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Unable to fetch crops",
    });
  }
});

// ==============================
// SEARCH CROPS
// Example:
// /api/crops/search?q=rice
// ==============================
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q || "";

    const result = await pool.query(
      "SELECT * FROM crops WHERE LOWER(name) LIKE LOWER($1)",
      [`%${query}%`]
    );

    res.json(result.rows);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Search failed",
    });
  }
});

// ==============================
// CROP RECOMMENDATION
// Example:
// /api/crops/recommend?soil=Black Soil&season=Kharif
// ==============================
router.get("/recommend", async (req, res) => {
  try {
    const { soil, season } = req.query;

    if (!soil || !season) {
      return res.status(400).json({
        message: "Soil and season are required",
      });
    }

    const result = await pool.query(
      `SELECT *
       FROM crops
       WHERE LOWER(TRIM(soil)) = LOWER(TRIM($1))
       AND LOWER(TRIM(season)) = LOWER(TRIM($2))
       LIMIT 1`,
      [soil, season]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "No crop found",
      });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Recommendation failed",
    });
  }
});

// ==============================
// GET CROP BY ID
// ==============================
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM crops WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json(result.rows[0]);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Unable to fetch crop",
    });
  }
});

// ==============================
// ADD NEW CROP
// ==============================
router.post("/", async (req, res) => {
  try {
    const { name, soil, season, water, fertilizer } = req.body;

    const result = await pool.query(
      `INSERT INTO crops(name, soil, season, water, fertilizer)
       VALUES($1,$2,$3,$4,$5)
       RETURNING *`,
      [name, soil, season, water, fertilizer]
    );

    res.status(201).json({
      message: "Crop added successfully!",
      crop: result.rows[0],
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Unable to add crop",
    });
  }
});

// ==============================
// UPDATE CROP
// ==============================
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, soil, season, water, fertilizer } = req.body;

    const result = await pool.query(
      `UPDATE crops
       SET name=$1,
           soil=$2,
           season=$3,
           water=$4,
           fertilizer=$5
       WHERE id=$6
       RETURNING *`,
      [name, soil, season, water, fertilizer, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.json({
      message: "Crop updated successfully!",
      crop: result.rows[0],
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Update failed",
    });
  }
});

// ==============================
// DELETE CROP
// ==============================
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM crops WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.json({
      message: "Crop deleted successfully!",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Delete failed",
    });
  }
});
module.exports = router;