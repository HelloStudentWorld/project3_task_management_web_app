import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <h1>My Todo App</h1>
      <div className="links">
        <NavLink to="/todos" activeClassName="active">
          Todos
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <Link to="/deliverables">Deliverables</Link>
      </div>
    </nav>
  );
}

export default Header;
