const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
   type: String,
   required: true
  },
  compensation: {
    type: String,
    required: true
  }  
  // Other job properties
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
