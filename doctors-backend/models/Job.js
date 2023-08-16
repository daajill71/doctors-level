const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Compensation: {
    type: String,
    required: true
  }
});

console.log('Job model initialized'); // Add a console log here

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
