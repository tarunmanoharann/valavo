// components/MainContent.jsx
import React, { useState, useEffect } from 'react';
// import './MainContent.css';

function MainContent() {
  const [activeTab, setActiveTab] = useState('global');
  const [isPaused, setIsPaused] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Mock video data
  const videos = [
    { title: "Epic Valorant Plays", creator: "@valorantPro", description: "Check out these insane plays!" },
    { title: "Map Strategies", creator: "@tacticalGamer", description: "Learn the best strategies for each map." },
    // Add more video objects as needed
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        setCurrentVideoIndex(prev => (prev > 0 ? prev - 1 : videos.length - 1));
      } else if (event.key === 'ArrowDown') {
        setCurrentVideoIndex(prev => (prev < videos.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      <div className="video-container" onClick={() => setIsPaused(!isPaused)}>
        <div className="video-player">
          {!isPaused && <div className="play-button">▶️</div>}
        </div>
        {isPaused && (
          <div className="video-info">
            <h3 className="video-title">{videos[currentVideoIndex].title}</h3>
            <p className="video-creator">{videos[currentVideoIndex].creator}</p>
            <p className="video-description">{videos[currentVideoIndex].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;