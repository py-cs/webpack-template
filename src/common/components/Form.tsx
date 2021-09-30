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
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="task">
        New task
        <input className="form__input" name="task" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter description" />
      </label>
      <button disabled={!task} className="form__button" type="submit">Add task</button>
    </form>
  );
};

export default Form;
