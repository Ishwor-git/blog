const express = require("express");
const router = express.Router();
const path = require("path");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

router.get("/test", (req, res) => {
  res.send({ data: "testing admin auth" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !user.comparePassword(password)) {
    return res.status(400).json({ error: "Invalid username or password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = router;
