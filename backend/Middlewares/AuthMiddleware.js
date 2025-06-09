
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
require("dotenv").config();

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ success: false });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) throw new Error();
    res.json({ success: true, user: { username: user.username } });
  } catch {
    res.status(401).json({ success: false });
  }
};
// const User = require("../models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ status: false });
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       return res.json({ status: false });
//     } else {
//       const user = await User.findById(data.id);
//       if (user) return res.json({ status: true, user: user.username });
//       else return res.json({ status: false });
//     }
//   });
// };