const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306 // fallback to 3306 if not defined
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err.message);
    return;
  }
  console.log('MySQL Connected');
});

module.exports = db;
