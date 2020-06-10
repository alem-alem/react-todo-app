import React from 'react';
import { render } from 'react-dom';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Learn React", completed: false },
  { id: "todo-1", name: "Gym", completed: false },
  { id: "todo-2", name: "Sleep", completed: false }
];

render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// NPM INSTALL REACT-ICONS