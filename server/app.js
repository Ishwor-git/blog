const path = require("path");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
const mongoose = require("./models");
const cors = require("cors");
// const { createAdmin } = require("./generator/admin");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", require(path.join(__dirname, "routes/routes.js")));

app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}`);
});

//check if mongoose is connected and run createAdmin function this is to be run only once
// mongoose.connection.once("open", () => {
//   createAdmin();
// });
