  const express = require('express');
  const router = express.Router();
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify-user", userVerification);
// router.post("/logout", (req, res) => {
//   res.clearCookie("token");
//   return res.status(200).json({ success: true, message: "Logged out" });
// });
router.post("/logout", (req, res) => {
  res.clearCookie("token", { sameSite: "None", secure: true });
  res.status(200).json({ success: true });
});

// router.get("/verify-user", async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ success: false, message: "Unauthorized" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
//     const user = await User.findById(decoded.id).select("username");

//     if (!user) {
//       return res.status(401).json({ success: false, message: "User not found" });
//     }

//     return res.status(200).json({ success: true, user: { username: user.username } });
//   } catch (err) {
//     return res.status(401).json({ success: false, message: "Invalid token" });
//   }
// });



module.exports = router;
