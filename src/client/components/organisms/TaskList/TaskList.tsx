import React from 'react';
import { Task } from '../../../api';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

const TaskList = ({ tasks, updateTask, deleteTask }: TaskListProps): JSX.Element => (
  <ul className="task-list">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    ))}
  </ul>
);

export default TaskList;
