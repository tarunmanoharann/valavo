// components/MainContent.jsx
import React, { useState } from 'react';
// import './MainContent.css';

function MainContent() {
  const [activeTab, setActiveTab] = useState('global');

  return (
    <div className="main-content">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'global' ? 'active' : ''}`}
          onClick={() => setActiveTab('global')}
        >
          GLOBAL
        </button>
        <button 
          className={`tab ${activeTab === 'mypicks' ? 'active' : ''}`}
          onClick={() => setActiveTab('mypicks')}
        >
          MY PICKS
        </button>
      </div>
      <div className="content-area">
        <div className="video-player">
          <div className="play-button">▶️</div>
        </div>
        <div className="channel-info">
          <span className="channel-name">channel_01</span>
          <p className="description">Description 01</p>
        </div>
      </div>
      <div className="preview-section">
        {/* Preview content here */}
      </div>
    </div>
  );
}

export default MainContent;