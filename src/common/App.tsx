import { apiGetTasks, apiAddTask } from '../client/api';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';
import '../client/styles/index.css';

export const App = () => {
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
