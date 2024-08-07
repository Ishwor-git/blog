const path = require("path");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
const mongoose = require("./models");
app.use(express.json());
app.use("/", require(path.join(__dirname, "routes/routes.js")));

app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}`);
});
