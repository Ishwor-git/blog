const express = require("express");
const router = express.Router();
const path = require("path");
const blogs = require("../data/blogData.js");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/blogs", (req, res) => {
  res.render("blogHome", {
    blogs: blogs,
  });
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    if (e.slug == req.params.slug) {
      return e;
    }
  });
  res.status(200).render("blogPost", {
    blog: myBlog[0],
  });
});

module.exports = router;
