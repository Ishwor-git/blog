const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.use("/", require(path.join(__dirname, "routes/routesMain.js")));

app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}`);
});
