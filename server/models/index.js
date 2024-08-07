const mongoose = require("mongoose");
require("dotenv").config();
const user = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const cluster = process.env.DB_CLUSTER;

console.log(user, password, host, cluster);

const mongoUri = `mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority&appName=${cluster}`;
mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to database");
});

module.exports = mongoose;
