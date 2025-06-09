const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

// Signup Controller

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: false, // Set secure:true if you use HTTPS
    });
    return res.status(201).json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error("Signup controller error:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Login Controller
const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Incorrect password or username", success: false });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect password or username", success: false });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: false, // Set secure:true if your domain uses HTTPS
    });
    return res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error("Login controller error:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};