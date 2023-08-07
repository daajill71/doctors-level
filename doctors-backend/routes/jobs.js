const express = require('express');
const router = express.Router();
const Job = require('../models/Job'); // Import your Mongoose model

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

module.exports = router;


// Sample job data (Replace this with your actual job data)
//const jobsData = [
  //{ id: 1, title: 'Software Engineer', compensation: '100,000' },
  //{ id: 2, title: 'Data Scientist', compensation: '90,000' },
  //{ id: 3, title: 'Product Manager', compensation: '110,000' },
  // Add more job objects as needed
//];

// Route to fetch jobs

  // Route to handle GET requests for /api/jobs
// router.get('/', (req, res) => {
 // res.json(jobsData);
// });

// module.exports = router;

