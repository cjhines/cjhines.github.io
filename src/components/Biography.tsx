import React from 'react';

import CV from '../assets/CV.pdf';
import hello from '../assets/hello.png';
import SocialBar from './SocialBar';

const Biography: React.FunctionComponent = () => (
  <div className="bioScroller">
    <div className="bioContent">
      <img src={hello} alt="Oh hey" style={imageStyle} />
      <h1>
        I'm Chris, a Berlin-based software developer that's passionate about
        building unique web and mobile applications.
      </h1>
      <br />
      <h1>
        I'm always open to collaborations or interesting ventures. Feel free to
        <a href={CV} rel="noopener noreferrer" target="_blank">
          view my CV
        </a>
        and get in touch.
      </h1>
      <SocialBar className="show-if-small topRight flexRow" />
    </div>
  </div>
);

const imageStyle: React.CSSProperties = {
  position: 'relative',
  width: '20vh',
  maxWidth: '150px',
  height: 'auto',
  marginBottom: '5vh',
};

export default Biography;
