import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.task}</span>
      <div>
        <button onClick={() => toggleTodo(index)}>Toggle</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </li>
  );
}

export default TodoItem;