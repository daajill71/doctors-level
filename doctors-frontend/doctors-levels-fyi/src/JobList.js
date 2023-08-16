import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://doctors-level-backend.onrender.com';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log('Fetching data from:', `${API_BASE_URL}/api/jobs`);

    axios.get(`${API_BASE_URL}/api/jobs`)
      .then(response => {
        console.log('Response data:', response.data);
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('Jobs:', jobs);

  return (
    <div>
      <h1>List of Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.Title}</h2>
            <p>Compensation: {job.Compensation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
