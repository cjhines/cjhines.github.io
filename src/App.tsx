import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './pages/Homepage';
import Invite from './pages/Invite';
import './App.scss';

const App: React.FunctionComponent = () => (
  <HashRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
