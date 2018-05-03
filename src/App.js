import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import logo from './logo.svg';
import './styles/App.css';
import Game from './containers/game';
import { emitChangeTurn } from './socket';
// let socket = socketIOClient('http://localhost:4001');

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

export let socket = socketIOClient('http://localhost:4001');

export default App;
