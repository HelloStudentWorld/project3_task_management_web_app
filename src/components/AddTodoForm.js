import React, { useState } from 'react';
import './AddTodoForm.css';

function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new todo..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
