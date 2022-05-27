import logo from './logo.svg';
import './App.css';

const count = 29;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello World!
        </p>
        <p style={{
        	color: 'red'
        }}>
          It's a to-do app
        </p>
        <p>
        	{count}
        </p>
        <p>
        	{33}
        </p>
        <p>
        	{31+37}
        </p>
        <p>
        	{flag && 'Flag is true'}
        </p>
        <p>
        	{count == 27 ? 'right' : 'wrong'}
        </p>
        <p>
        	{undefined}
        	{null}
        	{false}
        	{true}
        </p>
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
