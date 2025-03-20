import logo from './logo.svg';
import './App.css';

function App() {
//Bacic Concepts:
// ======================================================>

  // variable:
  var name='Mysha Ahmed';
  var age=25;

  // object:
  var person={
    name: 'Mysha Ahmed',
    age: 25,
  }

  // array:
  var numbers=[1,2,3,4,5];

  // function:
  var greet=function(){
    console.log('Hello World!');
  }

  // conditional rendering:
  var isAdult=age>=18;
  // ternary operator:
  var greeting=isAdult?'Welcome':'Sorry, you are too young.';

// Style object:
//===========================================================
  var style={
    color: 'red',
    backgroundColor: 'pink',
  }

  // JSX:
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I am {name}! 🤗
          <br />  How old am I? <br />  {age} Years old.
        </p>
        <h3>A question For you Now ✨</h3>
        <p style={style}>Do you know {person.name}? </p>
        <p style={{backgroundColor: 'cyan',color: 'blue'}}>Yes, she is {person.age} years old. </p> /* inline style*/
        <p>The sum of the numbers in the array is {numbers.reduce((a,b)=>a+b,0)}. </p>
        <button onClick={greet}>Greet</button>
        <p>{greeting}</p>
      </header>
    </div>
  );
}

export default App;
