import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

console.log("rendering display window");

ReactDOM.render(
  <App />,
  document.getElementById('display-window')
);

