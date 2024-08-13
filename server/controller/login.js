const User = require("../models/user");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(403)
        .json({ message: "Invalid username or password", success: false });
    }

    const isPassEqual = await user.comparePassword(password);
    if (!isPassEqual) {
      return res
        .status(403)
        .json({ message: "Invalid username or password", success: false });
    }
    const token = jwt.sign(
      { usename: user.username, id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      username: user.username,
      token: token,
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  Login,
};
