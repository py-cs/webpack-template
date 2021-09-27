import React from 'react';

interface TaskListProps {
  tasks: string[];
}

const TaskList = ({ tasks }: TaskListProps) => (
  <ul>
    {tasks.map((task) => <li key={task}>{task}</li>)}
  </ul>
);

export default TaskList;
