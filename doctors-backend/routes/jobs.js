const express = require('express');
const router = express.Router();

// Sample job data (Replace this with your actual job data)
const jobsData = [
  { id: 1, title: 'Software Engineer', compensation: '100,000' },
  { id: 2, title: 'Data Scientist', compensation: '90,000' },
  { id: 3, title: 'Product Manager', compensation: '110,000' },
  // Add more job objects as needed
];

// Route to handle GET requests for /api/jobs
router.get('/', (req, res) => {
  res.json(jobsData);
});

module.exports = router;
