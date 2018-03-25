import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import ChessBoard from './containers/chessBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloadss.
        </p>
        <ChessBoard/>
      </div>
    );
  }
}

export default App;
