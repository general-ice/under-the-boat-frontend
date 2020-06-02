import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {App} from './app';

const testIo = io('http://localhost:81')

testIo.emit('events', {someData: 'datatatatattat'}, console.log)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
