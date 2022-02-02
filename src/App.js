import './App.css';
import React from 'react';
import TaskHeader from './TaskHeader.js';
import TaskForm from './TaskForm.js';

function App() {
  return (
    <div className="App">
      {/*header*/}
      <TaskHeader/>
      {/*// add task form and dispaly tasks*/}
      <TaskForm/>

    </div>
  );
}

export default App;
