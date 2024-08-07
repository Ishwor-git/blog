const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/test", (req, res) => {
  res.send({ data: "testing api" });
});

router.use("/blogs", require(path.join(__dirname, "blogs.js")));
router.use("/contact", require(path.join(__dirname, "contact.js")));

module.exports = router;
