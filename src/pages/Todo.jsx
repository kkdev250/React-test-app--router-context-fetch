import React, { useContext } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodosContext } from '../context/context';
import '../App.css';

function Todo() {
  const { todos, setTodos } = useContext(TodosContext);

  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default Todo;