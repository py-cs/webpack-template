import React, {
  useCallback, useEffect, useState,
} from 'react';
import {
  apiAddTask,
  apiDeleteTask,
  apiGetAltTemplate,
  apiGetTasks,
  apiUpdateAltTemplate,
  apiUpdateTask,
  Task,
} from '../api';
import Switch from '../components/atoms/Switch/Switch';
import AltTemplate from '../components/templates/AltTemplate/AltTemplate';
import TaskTemplate from '../components/templates/TaskTemplate';
import MainPageContext from './MainPageContext';

const Main = (): JSX.Element => {
  const [tasks, setTasks] = useState([]);
  const [altTemplate, setAltTemplate] = useState(false);

  useEffect(() => {
    apiGetTasks().then((data) => setTasks(data));
    apiGetAltTemplate().then((data) => setAltTemplate(data));
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

  const toggleTemplate = useCallback(
    () => {
      apiUpdateAltTemplate(!altTemplate);
      setAltTemplate(!altTemplate);
    },
    [altTemplate],
  );

  return (
    <>
      <Switch checked={altTemplate} toggle={toggleTemplate} />
      <MainPageContext.Provider value={{
        tasks, createTask, updateTask, deleteTask,
      }}
      >
        {altTemplate ? <AltTemplate /> : <TaskTemplate />}
      </MainPageContext.Provider>
    </>
  );
};

export default Main;
