import React from 'react';

interface TaskListProps {
  tasks: string[];
}

const TaskList = ({ tasks }: TaskListProps): JSX.Element => (
  <ul className="task-list">
    {tasks.map((task) => <li className="task-list__item" key={task}>{task}</li>)}
  </ul>
);

export default TaskList;
