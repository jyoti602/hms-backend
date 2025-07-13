const db = require('../config/db');

exports.getDashboardStats = (req, res) => {
  const stats = {
    appointments: 0,
    newPatients: 0,
    totalDoctors: 0,
    totalContacts: 0
  };

  const queries = [
    `SELECT COUNT(*) AS count FROM appointments`,
   `SELECT COUNT(*) AS count FROM appointments WHERE status IN ('Confirmed', 'Completed')`,
    `SELECT COUNT(*) AS count FROM doctors`,
    `SELECT COUNT(*) AS count FROM contact`
  ];

  let completed = 0;

  queries.forEach((query, index) => {
    db.query(query, (err, results) => {
      if (err) return res.status(500).json({ error: err });

      switch (index) {
        case 0:
          stats.appointments = results[0].count;
          break;
        case 1:
          stats.newPatients = results[0].count;
          break;
        case 2:
          stats.totalDoctors = results[0].count;
          break;
        case 3:
          stats.totalContacts = results[0].count;
          break;
      }

      completed++;
      if (completed === queries.length) {
        res.json(stats);
      }
    });
  });
};
