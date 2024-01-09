const express = require("express");
const router = express.Router();
const path = require("path");
const blogs = require("../data/blogData.js");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/blogs", (req, res) => {
  // blog.forEach((e) => {
  //   console.log(e.title);
  // });
  res.status(200).sendFile(path.join(__dirname, "../templates/blogHome.html"));
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    if (e.slug == req.params.slug) {
      return e;
    }
    // return (e.slug = req.params.slug);
  });
  console.log(myBlog);
  res.status(200).sendFile(path.join(__dirname, "../templates/blogPage.html"));
});

module.exports = router;
