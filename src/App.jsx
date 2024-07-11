// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import './App.css';

function App() {
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <MainContent />
        <RightPanel isOpen={isRightPanelOpen} setIsOpen={setIsRightPanelOpen} />
      </div>
    </div>
  );
}

export default App;