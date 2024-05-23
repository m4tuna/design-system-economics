import './App.css';
import SavingsCalculator from './Calculator';

function App() {
  return (
    <div className="App">
      <SavingsCalculator />
      <div className="footer">
        by &nbsp;
        <a
          className="App-link"
          href="https://mikefortuna.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          m42na
        </a>
        </div>
    </div>
  );
}

export default App;
