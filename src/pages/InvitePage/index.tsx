import React from 'react';
import floralPattern from './assets/floralPattern.svg';
import wavePattern from './assets/wavePattern.svg';
import matatu from './assets/matatu.png';
import matatu2 from './assets/matatu2.png';
import kaos from './assets/kaos.png';
import portrait from './assets/portrait.png';
import tower from './assets/tower.png';
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
      <div className={styles.headerContainer}>
        <img src={kaos} alt="kaos" className={styles.kaosImage} />
        <img src={tower} alt="tower" className={styles.towerImage} />
      </div>
      <div className={styles.centerContainer}>
        <img src={portrait} alt="portrait" className={styles.portrait} />
      </div>
      <div className={styles.matatuContainer}>
        <img src={matatu} alt="matatu" className={styles.matatuImage} />
        <img src={matatu2} alt="matatu2" className={styles.matatuImage2} />
      </div>
    </div>
  </div>
);

export default Invite;
