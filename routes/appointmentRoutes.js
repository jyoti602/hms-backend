// === routes/appointmentRoutes.js ===
const express = require('express');
const router = express.Router();
const {
  addAppointment,
  getAppointment,
  updateAppointmentStatus,
  getPatients
} = require('../controllers/appointmentController');

router.post('/', addAppointment);                      // Add new appointment
router.get('/details', getAppointment);
router.get('/patient-details', getPatients);                // Get all or filtered appointments// Get all or filtered appointments
router.put('/:id', updateAppointmentStatus);           // Update status by ID

module.exports = router;
