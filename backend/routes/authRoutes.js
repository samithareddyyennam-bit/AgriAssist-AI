const express = require("express");
const router = express.Router();

// Demo User
const user = {
  username: "admin",
  password: "123456"
};

// Login API
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === user.username &&
    password === user.password
  ) {
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
        username: user.username
      }
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid Username or Password"
  });
});

module.exports = router;