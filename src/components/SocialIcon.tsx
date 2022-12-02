import React from 'react';

import sprites from '../assets/sprites.svg';

export enum IconType {
  EMAIL = 'EMAIL',
  GITHUB = 'GITHUB',
  LEAF = 'LEAF',
  LINKEDIN = 'LINKEDIN',
}

type Props = {
  type: IconType;
  url: string;
  label: string;
};

const SocialIcon: React.FunctionComponent<Props> = ({
  type,
  url,
  label,
}: Props) => (
  <a href={url} aria-label={label} rel="noopener noreferrer" target="_blank">
    <div style={style}>
      <svg viewBox="0 0 512 512" width={30} height={30} fill="white">
        <use href={`${sprites}#${type}`} />
      </svg>
    </div>
  </a>
);

const style: React.CSSProperties = {
  display: 'flex',
  width: 50,
  height: 50,
  margin: 10,
  backgroundColor: 'black',
  borderRadius: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

export default SocialIcon;
