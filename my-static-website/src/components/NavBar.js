import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/courses" onClick={toggleMenu}>Courses</Link>
          <Link to="/toppers" onClick={toggleMenu}>Toppers</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
