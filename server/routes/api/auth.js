const express = require("express");
const router = express.Router();
const path = require("path");
const { LoginValidation } = require("../../middleware/dataValidation");
const { Login } = require("../../controller/login");
router.post("/login", LoginValidation, async (req, res) => {
  Login(req, res);
});

module.exports = router;
