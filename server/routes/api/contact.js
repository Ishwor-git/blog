const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/test", (req, res) => {
  res.send({ data: "testing contact" });
});

module.exports = router;
