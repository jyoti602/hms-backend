const bcrypt = require('bcrypt');
const authModel = require('../models/authModel');

// Signup
exports.signupUser = async (req, res) => {
  console.log(req.body)
  const {name, email, password } = req.body;

  if (!name || !email || !password ) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  authModel.findUserByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0) return res.status(409).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { name, email, hashedPassword };

    authModel.insertUser(userData, (err) => {
      if (err) return res.status(500).json({ message: "Failed to register user" });
      return res.status(201).json({ message: "Signup successful" });
    });
  });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  authModel.findUserForLogin(email, async (err, user) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    res.status(200).json({ success: true, role: user.userType });
  });
};
