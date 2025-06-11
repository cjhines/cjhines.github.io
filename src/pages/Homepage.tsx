import React from 'react';

import Biography from '../components/Biography';
import Canvas from '../components/Canvas';
import SocialBar from '../components/SocialBar';

const HomeScreen: React.FunctionComponent = () => (
  <>
    <Biography />
    <Canvas>
      <SocialBar className="topLeft" />
    </Canvas>
  </>
);

export default HomeScreen; 