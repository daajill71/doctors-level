//import logo from './logo.svg';

//import JobsTable from './JobsTable';
//import './styles.css'; // Import the CSS file
//import ChartComponent from './ChartComponent'; 
import './App.css';
import JobsList from './JobsList';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Listings</h1>
        <JobsList /> {/* Use the JobsList component */}
      </header>
    </div>
  );
}

export default App;
