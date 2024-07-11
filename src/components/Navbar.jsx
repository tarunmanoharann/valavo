// components/Navbar.jsx
import React from 'react';
// import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Valavo</div>
      <div className="nav-icons">
        <span className="icon">🌐</span>
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
}

export default Navbar;