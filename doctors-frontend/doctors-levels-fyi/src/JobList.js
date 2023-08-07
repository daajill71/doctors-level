import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('https://doctors-level-backend.onrender.com/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {/* Display the list of jobs */}
      {jobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>Compensation: {job.compensation}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
