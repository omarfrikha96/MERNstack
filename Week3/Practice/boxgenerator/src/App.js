import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import NinjaForm from './components/NinjaForm';
import NinjaDisplay from './components/NinjaDisplay';

function App() {

  const [ boxColor, setBoxColor ] = useState([]);

   const [ ninjaBox, setNinjaBox ] = useState([])

  return (
    <div className="App">
      <h1>First Part</h1>
      <Form boxColor={ boxColor } setBoxColor={ setBoxColor } />
      <Display boxColor={ boxColor } />
  
      <hr />
      <h1>Ninja Bonus</h1>
      <NinjaForm ninjaBox={ ninjaBox } setNinjaBox={ setNinjaBox } />
      <NinjaDisplay ninjaBox={ ninjaBox } />
      
    </div>
  );
}

export default App;