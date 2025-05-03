import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// Import Font Awesome for icons
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Home icon instead of text */}
        <li><Link to="/"><i className="fa fa-home"></i></Link></li> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
