const User = require("../models/user");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const createAdmin = async () => {
  const existingAdmin = await User.findOne({
    username: process.env.ADMIN_USERNAME,
  });
  if (existingAdmin) {
    console.log("Admin already exists");
    return;
  }
  const admin = new User({
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  });

  try {
    await admin.save();
    console.log("Admin created successfully");
  } catch (err) {
    console.log("Error creating admin", err.message);
  }
};

exports.createAdmin = createAdmin;
