const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", (req, res) => {
  res.clearCookie("token", { sameSite: "None", secure: true });
  res.status(200).json({ success: true });
});
router.get("/verify-user", userVerification);

module.exports = router;
