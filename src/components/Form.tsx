import React, { useState } from 'react';

interface FormProps {
  addTask(task: string): void;
}

const Form = ({ addTask }: FormProps) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">
        <input name="task" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter new task" />
      </label>
      <button type="submit">Add tast</button>
    </form>
  );
};

export default Form;
