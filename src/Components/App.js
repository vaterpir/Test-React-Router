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
        <button onClick={() => addTask(newTask)}>Добавить</button>
      </div>
      <div className="taskList">
        {tasks.map((task, i) => (
          <div key={task + i}>{task}</div>
        ))}
      </div>
    </div>
  </div>
);
