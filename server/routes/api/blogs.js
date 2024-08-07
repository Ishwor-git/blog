const express = require("express");
const router = express.Router();
const path = require("path");
const Blog = require("../../models/blog");

router.get("/test", (req, res) => {
  res.send({ data: "testing blogs" });
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const result = await blog.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { search } = req.query;
    if (!search) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const regex = new RegExp(search, "i");
    const blogs = await Blog.find({
      $or: [{ title: regex }, { author: regex }, { ["description"]: regex }],
    });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/filter", async (req, res) => {
  try {
    const { author, catagory, tags, startDate, endDate } = req.query;
    const filter = {};
    if (author) {
      filter.author = author;
    }
    if (catagory) {
      filter.catagory = catagory;
    }
    if (tags) {
      filter.tags = { $all: tags.split(",") };
    }

    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) {
        filter.createdAt.$gte = new Date(startDate);
      }
    }

    if (endDate) {
      filter.createdAt.$lte = new Date(endDate);
    }

    const blogs = await Blog.find(filter);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
