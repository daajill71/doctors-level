const Job = require('./models/Job');
const mongoose = require('mongoose'); // Import mongoose directly
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

// Function to insert sample job data
const seedSampleJobs = async () => {
  try {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const sampleJobs = [
      {
        title: 'Software Engineer',
        compensation: '90000',
        // Other job properties
      },
      {
        title: 'Data Analyst',
        compensation: '75000',
        // Other job properties
      },
      // Add more sample job data as needed
    ];

    await Job.insertMany(sampleJobs);
    console.log('Sample jobs inserted successfully');
  } catch (error) {
    console.error('Error seeding sample data:', error);
  } finally {
    mongoose.disconnect(); // Disconnect after seeding
  }
};

// Insert sample job data
seedSampleJobs();
