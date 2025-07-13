const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/details', doctorController.getDoctors);
router.post('/', doctorController.addDoctors);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
