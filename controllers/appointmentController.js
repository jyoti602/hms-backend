const {
  insertAppointment,
  fetchAppointments,
  updateAppointmentStatus, // ✅ New function
  fetchPatients
} = require('../models/appointmentModel');

// ADD NEW APPOINTMENT
exports.addAppointment = (req, res) => {
  console.log("Appointment Request Body:", req.body);

  try {
    insertAppointment(req.body, (err, result) => {
      if (err) {
        console.error("Error inserting appointment:", err);
        return res.status(500).json({ success: false, message: err.message });
      }

      res.status(201).json({ success: true, message: 'Appointment added successfully' });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// GET ALL APPOINTMENTS
exports.getAppointment = (req, res) => {
  fetchAppointments((err, result) => {
    if (err) {
      console.error("Error fetching appointments:", err);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    res.status(200).json(result);
  });
};

// ✅ UPDATE APPOINTMENT STATUS BY ID
exports.updateAppointmentStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ success: false, message: "Status is required" });
  }

  updateAppointmentStatus(id, status, (err, result) => {
    if (err) {
      console.error("Error updating appointment status:", err);
      return res.status(500).json({ success: false, message: err.message });
    }

    res.status(200).json({ success: true, message: "Status updated successfully" });
  });
};

// GET ALL APPOINTMENTS (OPTIONALLY FILTERED)
exports.getPatients = (req, res) => {
  fetchPatients((err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    res.status(200).json(result);
  });
};
