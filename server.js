const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import route files
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const contactRoutes = require('./routes/contactRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);                // e.g., POST /api/auth/signup
app.use('/api/appointments', appointmentRoutes); // e.g., GET /api/appointments
app.use('/api/contact', contactRoutes);          // e.g., POST /api/contact
app.use('/api/doctor', doctorRoutes);   
// Root route
app.get('/', (req, res) => res.send('API Running'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`
));




