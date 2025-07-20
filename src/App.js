import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          🚀 <strong>Hello Bakht!</strong> Your CI/CD setup is working perfectly. 🎉
        </p>
        <p>
          This message confirms that the React app was deployed from GitHub to your VPS using GitHub Actions.
        </p>
        <p>
          Domain: <code>bakhtreact.mypowerly.com</code>
        </p>
      </header>
    </div>
  );
}

export default App;
