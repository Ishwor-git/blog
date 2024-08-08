const express = require("express");
const router = express.Router();
const path = require("path");
const Blog = require("../../models/blog");

router.use("/auth", require(path.join(__dirname, "auth.js")));

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

router.get("/filter-blogs", async (req, res) => {
  try {
    const { reviewed, accepted } = req.query;
    const filter = {};
    if (reviewed) {
      filter.reviewed = reviewed;
    }
    if (accepted) {
      filter.accepted = accepted;
    }
    const blogs = await Blog.find(filter);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/review-blog/:id", async (req, res) => {
  try {
    const { id, reviewed, accepted } = req.body;
    const updateData = {};
    if (reviewed) {
      updateData.reviewed = reviewed;
    }
    if (accepted) {
      updateData.accepted = accepted;
    }
    const blog = await Blog.findByIdAndUpdate(id, updateData, { new: true });
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
