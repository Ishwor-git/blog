const express = require("express");
const router = express.Router();
const path = require("path");
const authMiddleware = require("../../middleware/auth");
const adminRoutes = require("./admin");
const RateLimitter = require("../../middleware/ratelimitter");
const contactRoutes = require("./contact");

router.get("/test", (req, res) => {
  res.send({ data: "testing api" });
});

router.use("/blogs", require(path.join(__dirname, "blogs.js")));
router.use("/contact", contactRoutes);
router.use("/auth", require(path.join(__dirname, "auth.js")));
router.use("/admin", authMiddleware, adminRoutes);

module.exports = router;
