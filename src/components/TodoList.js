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
      <AddTodoForm addTodo={handleAddTodo} />
      <Filter setFilter={setFilter} />
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
