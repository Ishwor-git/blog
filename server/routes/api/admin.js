const express = require("express");
const router = express.Router();
const path = require("path");
const Blog = require("../../models/blog");

router.get("/test", (req, res) => {
  res.send({ data: "testing api admin" });
});

router.get("/all-blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
