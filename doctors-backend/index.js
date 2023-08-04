const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB connection string)
mongoose.connect('your-mongodb-uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes and API endpoints here
// Example: app.use('/api/salaries', require('./routes/salaries'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
