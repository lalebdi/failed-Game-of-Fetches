import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Housekeeping done</h1>
      <h1>Going to make it in mutiple pages</h1>
      <h1>I need to render the info in a material ui card</h1>
      <h1>Need to place the continue and back buttons and their methods</h1>
      <h1>Components created and linking is left</h1>
      <Home />

    </div>
  );
}

export default App;


// create the state here and have axios pull the data from the API here (multiple requests) and place them in the state and then pass them down as props to the childern
// I'm going to create methods to proceed to the next step and another to go back
// I could use the Material UI Card to display the questions and the answers.