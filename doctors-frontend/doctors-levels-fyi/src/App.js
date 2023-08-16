//import logo from './logo.svg';

//import JobsTable from './JobsTable';
//import './styles.css'; // Import the CSS file
//import ChartComponent from './ChartComponent'; 
import './App.css';
import JobList from './JobList';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Listings</h1>
        <JobList /> {/* Use the JobsList component */}
      </header>
    </div>
  );
}

export default App;
