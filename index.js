const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware: CORS (Allow frontend to access backend)
app.use(cors({
  origin: 'http://localhost:3000', // only allow frontend at port 3000
  credentials: true
}));

// Middleware: Parse JSON body
app.use(bodyParser.json());

// Routes

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is About Page');
});

// Mock Login API
app.post('/api/login', (req, res) => {
    console.log(req.body)
  const { email, password, userType } = req.body;

  // Simulated login validation
  if (email === 'admin@example.com' && password === '12345' && userType === 'admin') {
    res.json({ success: true, role: 'admin' });
  } else if (email === 'doctor@example.com' && password === '12345' && userType === 'doctor') {
    res.json({ success: true, role: 'doctor' });
  } else if (email === 'patient@example.com' && password === '12345' && userType === 'patient') {
    res.json({ success: true, role: 'patient' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials or user type' });
  }
});

// Just for demo
app.post('/api/appointment', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Appointment added successfully' });
});

app.post('/api/contact', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Contact added successfully' });
});

// Start the server
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
