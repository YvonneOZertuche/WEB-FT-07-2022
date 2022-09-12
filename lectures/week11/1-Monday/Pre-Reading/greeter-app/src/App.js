import React from 'react'
import logo from './logo.svg';
import './App.css';

import Greeter from './components/Greeter'  //importing component


const nameArray = [
  'Melanie',
  'Emma',
  'Mel B',
  'Geri',
  'Victoria'
]

function App() {
  return (
    <div className="App">

      <h1 className='greeting'>Hello React!</h1>

        { /*For each name in nameArray, render a <Greeter /> */}

        {
          nameArray.map(n => <Greeter key={n} name={n} />    
          //nameArray.map() is plain JavaScript, therefore we must put it inside {}
        )}

       
    </div>
  );
}

export default App;


//Using a custom component involves two steps:
//1. importing the class component (in this example Greeter)
//2. Writing a JSX tag (Greeter is a JSX tag in this example)


//App(nameArray.map(Greeter))
// .map() will call Greeter(), passing it each element in nameArray
