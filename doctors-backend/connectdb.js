const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  // Export the connection
  module.exports = db;
} catch (error) {
  console.error('An error occurred while connecting to MongoDB:', error);
}
