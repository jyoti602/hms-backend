const express = require('express');
const router = express.Router();
const { submitContact, getTestimonials } = require('../controllers/contactController');

// ✅ POST route for contact form submission
router.post('/', submitContact);

// ✅ NEW: GET route for fetching testimonials
router.get('/testimonials', getTestimonials);

module.exports = router;
