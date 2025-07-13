const db = require('../config/db');
exports.findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], callback);
};

exports.insertUser = (userData, callback) => {
  const { name, email, hashedPassword } = userData;
  const query = `
    INSERT INTO users (full_name, email, password)
    VALUES (?, ?, ?)
  `;
  db.query(query, [ name, email, hashedPassword], callback);
};
exports.findUserForLogin = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) return callback(err, null);
    if (results.length === 0) return callback(null, null);
    callback(null, results[0]);
  });
};
