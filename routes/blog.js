const express = require("express");
const router = express.Router();
const path = require("path");
const blog = require("../data/blogData.js");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/blogs", (req, res) => {
  blog.forEach((e) => {
    console.log(e.title);
  });
});

module.exports = router;
