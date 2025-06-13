import React from 'react';

import Biography from '../components/Biography';
import Canvas from '../components/Canvas';
import SocialBar from '../components/SocialBar';

const HomePage: React.FunctionComponent = () => (
  <>
    <Biography />
    <Canvas>
      <SocialBar className="topLeft" />
    </Canvas>
  </>
);

export default HomePage;
