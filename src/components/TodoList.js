import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import Filter from './Filter';
import './TodoList.css';
import { addTodo, toggleComplete, deleteTodo } from '../redux/actions/todoActions';

function TodoList() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filter, setFilter] = React.useState('all');

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h1 className="page-title">Todo List</h1>
      <AddTodoForm addTodo={handleAddTodo} />
      <Filter setFilter={setFilter} />
      <div className="instructions">
        <h3>How to Use This Todo List</h3>
        <ul>
          <li>Type your task in the input field and press Enter or click Add</li>
          <li>Click the checkbox to mark a task as complete</li>
          <li>Click the delete button (×) to remove a task</li>
          <li>Use the filter buttons to show All, Active, or Completed tasks</li>
          <li>Tasks are automatically saved to your browser's local storage</li>
        </ul>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={handleToggleComplete} 
            deleteTodo={handleDeleteTodo} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
