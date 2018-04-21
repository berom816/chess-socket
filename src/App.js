import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Game from './containers/game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloadss.
        </p>
        <Game/>
      </div>
    );
  }
}

export default App;
