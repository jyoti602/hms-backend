const Doctor = require('../models/doctorModel');
const doctorController = require('../controllers/doctorController');



exports.getDoctors = (req, res) => {
  Doctor.getAllDoctors((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addDoctors = (req, res) => {
  Doctor.createDoctor(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Doctor added', id: result.insertId });
  });
};

exports.updateDoctor = (req, res) => {
  const { id } = req.params;
  Doctor.updateDoctor(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Doctor updated' });
  });
};

exports.deleteDoctor = (req, res) => {
  const { id } = req.params;
  Doctor.deleteDoctor(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Doctor deleted' });
  });
};
