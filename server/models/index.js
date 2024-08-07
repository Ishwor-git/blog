const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://hydra:dbHydra@cluster0.e0h72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to database");
});

module.exports = mongoose;
