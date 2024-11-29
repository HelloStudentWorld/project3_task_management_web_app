import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
