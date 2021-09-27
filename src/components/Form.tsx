import React, { useState } from "react";

export const Form = ({addTask}) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTask(task);
    setTask('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
      <input name="task" type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Enter new task" />
      <button type="submit">Add tast</button>
    </form>
  )
}
