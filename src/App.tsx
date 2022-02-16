import React from 'react';

import Biography from './components/Biography';
import Canvas from './components/Canvas';
import SocialBar from './components/SocialBar';
import './App.scss';

const App: React.FunctionComponent = () => (
  <div className="app">
    <Biography />
    <Canvas>
      <SocialBar className="topLeft" />
    </Canvas>
  </div>
);

export default App;
