const express = require('express');
const router = express.Router();
const Job = require('../models/Job'); // Import your Mongoose model

router.get('/api/jobs', async (req, res) => {
  try {
    //console.log('Fetching jobs...');
    console.log('Route is being accessed...');
    const jobs = await Job.find(); // Use Job.find() to fetch jobs
    console.log('Fetched jobs:', jobs);
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

module.exports = router;
