const express = require("express");
const router = express.Router();
const path = require("path");
const authMiddleware = require("../../middleware/auth");
const adminRoutes = require("./admin");
const { RateLimitter } = require("../../middleware/ratelimitter");

router.get("/test", (req, res) => {
  res.send({ data: "testing api" });
});

router.use("/blogs", require(path.join(__dirname, "blogs.js")));
router.use(
  "/contact",
  RateLimitter,
  require(path.join(__dirname, "contact.js"))
);
router.use("/admin", authMiddleware, adminRoutes);

module.exports = router;
