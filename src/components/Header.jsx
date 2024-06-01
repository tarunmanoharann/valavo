import React from 'react';
import { FaUser, FaBell, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="tabs">
        <button>GLOBAL</button>
        <button>MY PICKS</button>
      </div>
      <div className="header-icons">
        <FaGlobe />
        <FaBell />
        <FaUser />
      </div>
    </header>
  );
};

export default Header;
