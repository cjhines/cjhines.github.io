import React from 'react';
import SocialBar from './SocialBar';
import hello from '../assets/hello.png';
import CV from '../assets/CV.pdf';

const imageStyle = {
  position: 'relative',
  width: '20vh',
  maxWidth: '150px',
  height: 'auto',
  marginBottom: '5vh',
} as React.CSSProperties;

const Biography: React.FunctionComponent = () => (
  <div className="bioScroller">
    <div className="bioContent">
      <img
        src={hello}
        alt=""
        style={imageStyle}
      />
      <h1>
        {'I\'m Chris, a Berlin-based software developer that\'s passionate about building unique web and mobile applications.'}
      </h1>
      <br />
      <h1>
        {'I\'m always open for collaborations or interesting ventures. Feel free to '}
        <a href={CV} rel="noopener noreferrer" target="_blank">
          view my CV
        </a>
        {' and get in touch.'}
      </h1>
      <SocialBar className="show-if-small topRight flexRow" />
    </div>
  </div>
);

export default Biography;
