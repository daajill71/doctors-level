const express = require('express');
const router = express.Router();
const Job = require('../models/Job'); // Import your Mongoose model

router.get('/jobs', async (req, res) => {
  try {
    console.log('Route is being accessed...'); // You can uncomment this for debugging
    const jobs = await Job.find(); // Use Job.find() to fetch jobs
    console.log('Fetched jobs:', jobs);
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

module.exports = router;
