import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://doctors-level-backend.onrender.com'; // Replace with your backend API base URL

const JobsTable = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/jobs`)
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter jobs based on the search term
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>List of Jobs</h1>
      <input
        type="text"
        placeholder="Search by job title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Compensation</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map(jobs => (
            <tr key={jobs._id}>
              <td>{jobs.Title}</td>
              <td>${jobs.Compensation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsTable;
