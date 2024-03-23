import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './navbar.css'; // Import your custom CSS for styling

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <div className="Navbar-logo">

        <Link to="/">your logo</Link> 
        </div>
        <div className="Navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="Navbar-buttons">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
