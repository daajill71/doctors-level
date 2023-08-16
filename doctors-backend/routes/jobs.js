const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/api/jobs', async (req, res) => {
  try {
    console.log('Fetching jobs...');
    const jobs = await Job.find();
    console.log('Fetched jobs:', jobs);
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

module.exports = router;
