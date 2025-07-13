const db = require('../config/db');

const DoctorModel = {
  // Get all doctors
  getAllDoctors: (callback) => {
    db.query('SELECT * FROM doctors', callback);
  },

  // Add a new doctor
  createDoctor: (data, callback) => {
    const sql = `
      INSERT INTO doctors 
      (full_name, gender, phone_number, email, specialization, qualification, experience, consultation_fee, address)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      data.name, data.gender, data.phone, data.email,
      data.specialization, data.qualification, data.experience,
      data.consultationFee, data.address
    ];
    db.query(sql, values, callback);
  },

  // Update doctor by ID
  updateDoctor: (id, data, callback) => {
    const sql = `
      UPDATE doctors SET 
      full_name = ?, gender = ?, phone_number = ?, email = ?, 
      specialization = ?, qualification = ?, experience = ?, 
      consultation_fee = ?, address = ?
      WHERE id = ?`;
    const values = [
      data.name, data.gender, data.phone, data.email,
      data.specialization, data.qualification, data.experience,
      data.consultationFee, data.address, id
    ];
    db.query(sql, values, callback);
  },

  // Delete doctor by ID
  deleteDoctor: (id, callback) => {
    db.query('DELETE FROM doctors WHERE id = ?', [id], callback);
  }
};

module.exports = DoctorModel;
