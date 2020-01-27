import React from 'react';
import banner from '../src/assets/banner.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Banner" src={banner} alt="" />
      </header>
    </div>
  );
}

export default App;
