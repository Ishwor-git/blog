const express = require("express");
const app = express();
const path = require("path");
var exphbs = require("express-handlebars");
const port = 3000;

// var exphbs = require('express-handlebars');
// app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
// app.set("view engine", ".hbs");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}`);
});
