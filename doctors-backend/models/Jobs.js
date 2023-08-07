const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  compensation: String,
  // Other job properties
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
