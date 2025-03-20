import logo from './logo.svg';
import './App.css';

function App() {
  var name='Mysha Ahmed';
  var age=25;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I am {name}! 🤗
          <br />  How old am I? <br />  {age} Years old.
        </p>
        
      </header>
    </div>
  );
}

export default App;
