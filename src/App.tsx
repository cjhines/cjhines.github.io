import React from 'react';
import SocialBar from './components/SocialBar';
import Biography from './components/Biography';
import Canvas from './components/Canvas';
import profile from './assets/profile.jpg';
import './App.scss';

const App: React.FunctionComponent = () => (
  <div className="app">
    <Biography />
    <Canvas>
      <SocialBar className="topLeft" />
      <img className="profile" src={profile} alt="" />
    </Canvas>
  </div>
);

export default App;
