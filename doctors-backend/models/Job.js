import { Schema, model } from 'mongoose';
const jobSchema = new Schema({
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

const Job = model('Job', jobSchema);

export default Job;
