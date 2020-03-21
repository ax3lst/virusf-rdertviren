import React, {Component} from 'react';
import '../styles/App.css';

import Questionaire from './Questionaire'

class App extends Component {

  state = {
    headerVisible: true
  }

  setHeader = (bool) => {
    this.setState({headerVisible: bool});
  }

  render() {
    return (
      <div className="App">
        <nav>
          <img src={process.env.PUBLIC_URL+'logo.jpg'} alt=""/>
        </nav>
        <div className={`header ${this.state.headerVisible ? "" : "headerInv"}`}>
          <h1>Leitfragen beim Homeoffice</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, ea ducimus sapiente 
            dicta tempore quaerat possimus eos illo quod itaque<br/>consequuntur quos, sunt corporis, 
            repellat blanditiis! Est ex nihil possimus.</p>
        </div>
        <div className="content">
          <Questionaire setHeader={this.setHeader} />
        </div>
        <footer>
          <div className="footer-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
