import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Users from './pages/Users';
import { AppProvider } from './context/context';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/todo">Todo</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/todo" Component={Todo} />
            <Route path="/users" Component={Users} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;