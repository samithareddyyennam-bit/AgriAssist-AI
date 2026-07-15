const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");

const verifyToken = require("../middleware/authMiddleware");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many requests. Try again after 15 minutes."
  }
});

router.post(
  "/register",
  authLimiter,
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    try {

      const { email, password } = req.body;

      const existingUser = await pool.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
      );

      if (existingUser.rows.length > 0) {
        return res.status(400).json({
          message: "Email already exists"
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await pool.query(
        `INSERT INTO users(email,password)
         VALUES($1,$2)
         RETURNING id,email`,
        [email, hashedPassword]
      );

      res.status(201).json({
        message: "User registered successfully",
        user: result.rows[0]
      });

    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Registration failed"
      });
    }
});

router.post(
  "/login",
  authLimiter,
  [
    body("email").isEmail(),
    body("password").notEmpty()
  ],
  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    try {

      const { email, password } = req.body;

      const result = await pool.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
      );

      if (result.rows.length === 0) {
        return res.status(400).json({
          message: "Invalid credentials"
        });
      }

      const user = result.rows[0];

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid credentials"
        });
      }

      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      );

      res.json({
        message: "Login successful",
        token
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        message: "Login failed"
      });
    }
});

router.get(
  "/protected",
  verifyToken,
  (req, res) => {
    res.json({
      message: "Protected route accessed successfully",
      user: req.user
    });
  }
);

router.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

module.exports = router;