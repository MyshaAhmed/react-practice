import logo from './logo.svg';
import './App.css';

function App() {
  var name='Mysha Ahmed';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I am {name}! 🤗
        </p>
        
      </header>
    </div>
  );
}

export default App;
