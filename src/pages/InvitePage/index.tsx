import React from 'react';
import floralPattern from './assets/floralPattern.svg';
import wavePattern from './assets/wavePattern.svg';
import matatu from './assets/matatu.png';
import matatu2 from './assets/matatu2.png';
import styles from './InvitePage.module.css';

const floralPatternUrl = `url(${floralPattern})`;

const Invite: React.FunctionComponent = () => (
  <div
    className={styles.container}
    style={{
      ['--floral-pattern' as string]: `url(${floralPattern})`,
      ['--wave-pattern' as string]: `url(${wavePattern})`,
    }}
  >
    <div className={styles.topHalf} />
    <div className={styles.bottomHalf} />
    <div className={styles.content}>
      <img src={matatu} alt="matatu" className={styles.matatuImage} />
      <img src={matatu2} alt="matatu2" className={styles.matatuImage} />
    </div>
  </div>
);

export default Invite;
