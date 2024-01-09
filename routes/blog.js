const express = require("express");
const router = express.Router();
const path = require("path");
const blogs = require("../data/blogData.js");

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../public/index.html"));
  res.render("home");
});

router.get("/blogs", (req, res) => {
  // blog.forEach((e) => {
  //   console.log(e.title);
  // });
  res.status(200).sendFile(path.join(__dirname, "../templates/blogHome.html"));
  // res.render(path.join(__dirname, "../views/home"));
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    if (e.slug == req.params.slug) {
      return e;
    }
  });
  console.log(myBlog);
  res.status(200).sendFile(path.join(__dirname, "../templates/blogPage.html"));
});

module.exports = router;
