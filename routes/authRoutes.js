const express = require('express');
const router = express.Router();
const { login, signupUser } = require('../controllers/authController');

router.post('/signup', signupUser); // ✅ This must exist
router.post('/login', login);

module.exports = router;
