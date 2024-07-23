// components/Navbar.jsx
import React, { useState } from 'react';
// import './Navbar.css';

function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Valavo</span>
        <div className="logo-effect"></div>
      </div>
      <div className="nav-icons">
        <div className="language-selector">
          <span className="icon" onClick={() => setIsLanguageOpen(!isLanguageOpen)}>🌐</span>
          {isLanguageOpen && (
            <div className="language-dropdown">
              <button>UK English</button>
              <button>US English</button>
              <button>French</button>
              <button>Spanish</button>
              <button>Japanese</button>
            </div>
          )}
        </div>
        <span className="icon notification-icon">🔔</span>
        <span className="icon profile-icon">👤</span>
      </div>
    </nav>
  );
}

export default Navbar;