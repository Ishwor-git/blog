const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
const mongoose = require("./models");

app.use("/", require(path.join(__dirname, "routes/routes.js")));

app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}`);
});
