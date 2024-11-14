// import logo from './logo.svg';
import './App.css';
import Rout from './Router/Route';
// import Loader from './Component/Loader/Loader';

function App() {
  return (
    <div className="App">
      {/* <Loader/> */}
      <Rout/>

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
