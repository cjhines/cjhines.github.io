import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import InvitePage from './pages/InvitePage';
import './App.scss';

const App: React.FunctionComponent = () => (
  <HashRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invite" element={<InvitePage />} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
