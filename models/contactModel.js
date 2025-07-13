const db = require('../config/db');

// Insert contact form submission into DB
exports.insertContactMessage = (contactData, callback) => {
  const { name, email, phone, subject, message } = contactData;

  const query = `
    INSERT INTO contact (Name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, email || '', subject, message], callback);
};
module.exports = db;
