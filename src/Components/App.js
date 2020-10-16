import React from 'react';
import './App.css';

export const App = ({ tasks, newTask, addTask, changeNewTask }) => (
  <div className="app">
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="first"
          value={newTask}
          onChange={(event) => changeNewTask(event.target.value)}
        />
        <button onClick={() => 1}>Добавить</button>
      </div>
    </div>
  </div>
);
