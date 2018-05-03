import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import App from './App';
import reducers from './reducers';

// import socketIOClient from 'socket.io-client';
// export let socket = socketIOClient('http://localhost:4001');
// import socket from './socket';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
