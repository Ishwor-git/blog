const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Error : Empty or invalid token" });
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  console.log(decoded);
  if (!decoded) {
    return res.status(401).json({ error: "Error : Invalid token" });
  }
  const user = decoded;
  if (!user) {
    return res.status(404).json({ error: "Error : User not found" });
  }
  req.user = user;
  next();
};

module.exports = authMiddleware;
