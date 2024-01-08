const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "../static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/static/index.html"));
});

app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}`);
});
