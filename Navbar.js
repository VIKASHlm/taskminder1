import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-link home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link projects">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tasks" className="nav-link tasks">
            Manage Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/teams" className="nav-link teams">
            View Teams
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link sign-out">
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
