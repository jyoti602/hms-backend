const db = require('../config/db');
const moment = require('moment');

// INSERT NEW APPOINTMENT
exports.insertAppointment = (data, callback) => {
  if (!data.department) return callback(new Error("Department is required"));

  const getDoctorQuery = 'SELECT full_name FROM doctors WHERE specialization = ? LIMIT 1';

  db.query(getDoctorQuery, [data.department], (err, result) => {
    if (err) return callback(err);

    if (result.length === 0) {
      return callback(new Error('No doctor found for the selected department'));
    }

    const doctorName = result[0].full_name;

    const insertQuery = `
      INSERT INTO appointments 
        (patient_name, contact_info, department_name, doctor_name, appointment_date, appointment_time, reason_notes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      data.patient,
      data.contact,
      data.department,
      doctorName,
      data.date,
      data.time,
      data.reason_notes,
    ];

    db.query(insertQuery, values, callback);
  });
};

// FETCH ALL APPOINTMENTS
exports.fetchAppointments = (callback) => {
  const query = `
    SELECT 
      id, 
      patient_name, 
      contact_info, 
      department_name, 
      doctor_name, 
      appointment_date, 
      appointment_time, 
      reason_notes, 
      status,               -- ✅ make sure status column exists
      created_at, 
      updated_at 
    FROM appointments
    ORDER BY appointment_date DESC, appointment_time ASC
  `;

  db.query(query, callback);
};

// ✅ UPDATE STATUS BY ID
exports.updateAppointmentStatus = (id, status, callback) => {
  const query = `UPDATE appointments SET status = ?, updated_at = ? WHERE id = ?`;
  const updatedTime = moment().format('YYYY-MM-DD HH:mm:ss');

  db.query(query, [status, updatedTime, id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(new Error('Appointment not found'));
    }
    callback(null, { message: 'Status updated successfully' });
  });
};


exports.fetchPatients = (callback) => {
  const query = `
    SELECT 
      id, 
      patient_name, 
      contact_info, 
      department_name, 
      doctor_name, 
      appointment_date, 
      appointment_time, 
      reason_notes, 
      status,
      created_at, 
      updated_at 
    FROM appointments
    WHERE status IN ('Confirmed', 'Completed')
    ORDER BY appointment_date DESC, appointment_time ASC
  `;

  db.query(query, callback);
};
