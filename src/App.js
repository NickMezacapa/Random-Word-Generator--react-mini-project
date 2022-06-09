import React from 'react';
import Generate from './Components/Generate/Generate';
import Display from './Components/Display/Display';
import './App.css';


function App() {

  return (
    <div className="App">
      <section className="Opening-Section">
        <h1 className="Opening-Title_h1">
          Welcome to the Word Generator!
        </h1>
        <h4 className="Opening-Title_h4">
          Click the button below to generate a random word and see its definition.
        </h4>
      </section>
      <section className="App-Content_componentsCta">
        <Generate />
        <Display />
      </section>
    </div>
  );
}

export default App;
