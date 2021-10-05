import { apiGetTasks, apiAddTask } from './api';
import React, { useCallback, useEffect, useState } from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';
import './styles/index.css';

export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    apiGetTasks().then(data => setTasks(data));
  }, [])

  const createTask = useCallback(
    (newTask: string) => {
      apiAddTask(newTask).then(() => setTasks([...tasks, newTask]))
    },
    [tasks],
  )

  return (
    <>
      <Form addTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
};
