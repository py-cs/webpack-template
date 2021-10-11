import React, { useState } from 'react';
import { Task } from '../../../api';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
  updateTask: (task: Task) => void;
  deleteTask: (task: string) => void;
}

export default function TaskItem({ task, updateTask, deleteTask }: TaskItemProps): JSX.Element {
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(task.description);

  const editTaskValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const update = () => {
    if (editMode) updateTask({ ...task, description });
    setEditMode(!editMode);
  };

  return (
    <li className="task">
      {editMode
        ? <Input inputId={`task-${task}`} value={description} placeholder="" onChange={editTaskValue} />
        : <div>{description}</div>}
      <div className="buttons">
        <Button caption={editMode ? 'Save' : 'Edit'} onClick={update} />
        <Button caption="Delete" onClick={() => deleteTask(task.id)} />
      </div>
    </li>
  );
}
