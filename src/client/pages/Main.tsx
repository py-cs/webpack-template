import React, { useCallback, useEffect, useState } from 'react';
import {
  apiAddTask, apiDeleteTask, apiGetTasks, apiUpdateTask, Task,
} from '../api';
import TaskTemplate from '../components/templates/TaskTemplate';

const Main = (): JSX.Element => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    apiGetTasks().then((data) => setTasks(data));
  }, []);

  const createTask = useCallback(
    (newTask: string) => {
      apiAddTask(newTask).then((data) => setTasks([...tasks, data]));
    },
    [tasks],
  );

  const updateTask = useCallback(
    (updatedTask: Task) => {
      apiUpdateTask(updatedTask)
        .then(() => setTasks(tasks
          .map((task) => (task.id === updatedTask.id ? updatedTask : task))));
    }, [tasks],
  );

  const deleteTask = useCallback(
    (id: string) => {
      apiDeleteTask(id).then(() => setTasks(tasks.filter((task) => task.id !== id)));
    },
    [tasks],
  );

  return (
    <TaskTemplate />
  );
};

export default Main;