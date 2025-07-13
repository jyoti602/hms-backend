const db = require('../config/db');

// ✅ Save contact form data
exports.submitContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  const query = `
    INSERT INTO contact (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error("Insert contact error:", err);
      return res.status(500).json({ message: 'Failed to send contact message' });
    }

    res.status(201).json({ message: 'Contact form submitted successfully' });
  });
};

// ✅ Fetch only name and message from contact table
exports.getTestimonials = (req, res) => {
  const query = 'SELECT name, message FROM contact ORDER BY id DESC LIMIT 10';

  db.query(query, (err, results) => {
    if (err) {
      console.error("Fetch testimonials error:", err);
      return res.status(500).json({ message: 'Failed to fetch testimonials' });
    }

    res.status(200).json(results);
  });
};
