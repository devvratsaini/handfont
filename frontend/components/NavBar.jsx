import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
        Handwriting Font Converter
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/title"></a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
       
      </div>
    </nav>
  );
};

export default NavBar;
