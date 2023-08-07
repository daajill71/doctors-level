const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB connection string)
mongoose.connect('mongodb+srv://daajill71:<pbzCtYRH2PkcCJk2>@cluster0.y8ly3hw.mongodb.net/?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import and use the jobs route
const jobsRoute = require('./routes/jobs');
app.use('/api/jobs', jobsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
