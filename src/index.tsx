import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import TaskList from './components/TaskList';
import './styles/index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Form addTask={(newTask) => setTasks([...tasks, newTask])} />
      <TaskList tasks={tasks} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
