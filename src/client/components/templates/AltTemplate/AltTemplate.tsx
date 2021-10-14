import React, { useContext } from 'react';
import MainPageContext from '../../../pages/MainPageContext';
import Form from '../../organisms/Form/Form';
import TaskList from '../../organisms/TaskList/TaskList';
import './AltTemplate.css';

const AltTemplate = (): JSX.Element => {
  const {
    tasks, createTask, updateTask, deleteTask,
  } = useContext(MainPageContext);

  return (
    <div className="alt-template">
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Form addTask={createTask} />
    </div>
  );
};

export default AltTemplate;
