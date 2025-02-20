import React, { createContext, useState } from 'react';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

const AppProvider = ({ children }) => {
  return (
    <TodosProvider>
      {children}
    </TodosProvider>
  );
};

export { TodosContext, AppProvider };
