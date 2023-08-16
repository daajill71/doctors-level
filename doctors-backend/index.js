import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { connect, connection } from 'mongoose';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());

import jobsRoute from './routes/jobs';
app.use('/api/jobs', jobsRoute);

const MONGO_URI = process.env.MONGO_URI;

connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

console.log('Server starting...'); // Add a console log here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
