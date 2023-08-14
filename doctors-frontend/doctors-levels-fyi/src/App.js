import logo from './logo.svg';
import './App.css';
import JobList from './JobList';
import JobsTable from './JobsTable';
import './styles.css'; // Import the CSS file
import ChartComponent from './ChartComponent'; 




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <JobList />
         <JobsTable/>
        
        
      </header>
    </div>
  );
}

export default App;
//JobsTable
 //ChartComponent data={jobs}
