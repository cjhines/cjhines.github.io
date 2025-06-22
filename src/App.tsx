import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import InvitePage from './pages/InvitePage';
import './App.scss';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tschuess" element={<InvitePage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
