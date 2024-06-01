import React from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Valavo</div>
      <nav>
        <Link to="/bigshots">BigShots</Link>
        <Link to="/maps">Maps</Link>
        <Link to="/franpride">FranPride</Link>
      </nav>
      <div className="power-off">
        <FaPowerOff />
      </div>
    </div>
  );
};

export default Sidebar;
