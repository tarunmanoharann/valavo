// components/RightPanel.jsx
import React from 'react';
// import './RightPanel.css';

function RightPanel({ isOpen, setIsOpen }) {
  return (
    <div className={`right-panel ${isOpen ? 'open' : ''}`}>
      <button 
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▶' : '◀'}
      </button>
      {isOpen && (
        <div className="friends-list">
          {/* Friends list and chat functionality here */}
        </div>
      )}
    </div>
  );
}

export default RightPanel;