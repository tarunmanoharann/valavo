import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Homepage.jsx';
import BigShots from './components/BigShots.jsx';
import Maps from './components/Maps.jsx';
import FranPride from './components/FranPride.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="bigshots" element={<BigShots />} />
          <Route path="maps" element={<Maps />} />
          <Route path="franpride" element={<FranPride />} />
          {/* <Route path="*" element={<Navigate to="/bigshots" />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
