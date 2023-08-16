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
  // Other job properties
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
