import { apiGetTasks, apiAddTask } from './api';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import TaskList from './components/TaskList';
import './styles/index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    apiGetTasks().then(data => setTasks(data));
  }, [])

  const createTask = (newTask: string) => {
    apiAddTask(newTask).then(() => setTasks([...tasks, newTask]))
  }

  return (
    <>
      <Form addTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
