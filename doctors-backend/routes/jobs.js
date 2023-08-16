import { Router } from 'express';
const router = Router();
import { find } from '../models/Job';

router.get('/api/jobs', async (req, res) => {
  try {
    console.log('Fetching jobs...');
    const jobs = await find();
    console.log('Fetched jobs:', jobs);
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

export default router;
