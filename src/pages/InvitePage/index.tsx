import React from 'react';
import floralPattern from './assets/floralPattern.svg';
import wavePattern from './assets/wavePattern.svg';
import matatu from './assets/matatu.png';
import matatu2 from './assets/matatu2.png';
import baobub from './assets/baobub.png';
import kaos from './assets/kaos.png';
import portrait from './assets/portrait.png';
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
      <div className={styles.matatuContainer}>
        <img src={matatu} alt="matatu" className={styles.matatuImage} />
        <img src={matatu2} alt="matatu2" className={styles.matatuImage2} />
      </div>
      <img src={portrait} alt="portrait" className={styles.portrait} />
      <div className={styles.footerContainer}>
        <img src={kaos} alt="kaos" className={styles.footerImage} />
        <img src={baobub} alt="baobab" className={styles.footerImage} />
      </div>
    </div>
  </div>
);

export default Invite;
