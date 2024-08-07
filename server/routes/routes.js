const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/test", (req, res) => {
  res.send({ data: "testing" });
});

router.use("/api", require(path.join(__dirname, "api/index.js")));

module.exports = router;
