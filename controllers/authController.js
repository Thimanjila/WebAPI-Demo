const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ msg: "Username and password required" });
    }

    // Check existing user
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashed,
      role
    });

    // Remove password before sending response
    const { password: _, ...userData } = user._doc;

    res.status(201).json(userData);

  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ msg: "Username and password required" });
    }

    // Check user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // JWT token (USE ENV VARIABLE)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};