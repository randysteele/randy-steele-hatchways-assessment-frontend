import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
