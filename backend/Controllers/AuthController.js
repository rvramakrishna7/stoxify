const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).json({ success: false, message: "Missing fields" });
  }

  // Lookup user in DB...
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  // Set cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });

  return res.json({ success: true, message: "Login successful" });
});


// module.exports.Login = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     if (!username || !password) {
//       return res.json({ message: "All fields are required" });
//     }
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.json({ message: "Incorrect password or username" });
//     }
//     const auth = await bcrypt.compare(password, user.password);
//     if (!auth) {
//       return res.json({ message: "Incorrect password or username" });
//     }
//     const token = createSecretToken(user._id);
//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "None",
//       secure: false,
//     });
//     return res
//       .status(201)
//       .json({ message: "User logged in successfully", success: true });
    
//   } catch (error) {
//     console.error(error);
//   }
// };
