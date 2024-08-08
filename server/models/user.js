const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bycrypt.hash(user.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  const user = this;
  return await bycrypt.compare(password, user.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
