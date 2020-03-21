import React from 'react';
import '../styles/App.css';

import Questionaire from './Questionaire'

function App() {
  return (
    <div className="App">
      <nav>
        <img src={process.env.PUBLIC_URL+'logo.jpg'} alt=""/>
      </nav>
      <div className="header">
        <h1>Leitfragen beim Homeoffice</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, ea ducimus sapiente 
          dicta tempore quaerat possimus eos illo quod itaque<br/>consequuntur quos, sunt corporis, 
          repellat blanditiis! Est ex nihil possimus.</p>
      </div>
      <div className="content">
        <Questionaire />
      </div>
    </div>
  );
}

export default App;
