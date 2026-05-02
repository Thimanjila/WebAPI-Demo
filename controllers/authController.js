const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashed,
    role
  });

  res.json(user);
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).json({ msg: "Invalid" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "SECRET",
    { expiresIn: "1d" }
  );

  res.json({ token });
};