import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import TextInput from '../../molecules/TextInput/TextInput';
import './Form.css';

interface FormProps {
  addTask: (task: string) => void;
}

export default function Form({ addTask }: FormProps): JSX.Element {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form className="form">
      <TextInput inputId="new-task-form" value={task} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} placeholder="Enter description" label="New task" />
      <Button caption="Add" onClick={handleSubmit} />
    </form>
  );
}
