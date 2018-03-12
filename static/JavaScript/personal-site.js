import React from 'react';
import ReactDOM from 'react-dom';

console.log("rendering display window");

ReactDOM.render(
  <h1 id = "display-header">React Text</h1>,
  document.getElementById('display-window')
);

