import React, { useContext } from 'react';
import MainPageContext from '../../pages/MainPageContext';
import Form from '../organisms/Form/Form';
import TaskList from '../organisms/TaskList/TaskList';
import './TaskTemplate.css';

const TaskTemplate = (): JSX.Element => {
  const {
    tasks, createTask, updateTask, deleteTask,
  } = useContext(MainPageContext);

  return (
    <div className="template">
      <Form addTask={createTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskTemplate;
