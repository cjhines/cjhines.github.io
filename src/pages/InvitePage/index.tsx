import React, { useState } from 'react';

import Modal from './components/Modal/Modal';
import styles from './InvitePage.module.css';
import modalStyles from './components/Modal/Modal.module.css';
import bye from './assets/bye.png';
import floralPattern from './assets/floralPattern.svg';
import jambo from './assets/jambo.png';
import kaos from './assets/kaos.png';
import matatu from './assets/matatu.png';
import matatu2 from './assets/matatu2.png';
import portrait1 from './assets/portrait1.png';
import portrait2 from './assets/portrait2.png';
import tower from './assets/tower.png';
import wavePattern from './assets/wavePattern.svg';

const Invite: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
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
          <img src={bye} alt="bye" className={styles.byeImage} />

          <div
            className={styles.portraitContainer}
            onClick={() => setIsModalOpen(true)}
          >
            <img src={portrait1} alt="portrait1" className={styles.portrait} />
            <img
              src={portrait2}
              alt="portrait2"
              className={styles.portraitHover}
            />
          </div>
          <img src={jambo} alt="jambo" className={styles.byeImage} />
        </div>
        <div className={styles.matatuContainer}>
          <img src={matatu} alt="matatu" className={styles.matatuImage} />
          <img src={matatu2} alt="matatu2" className={styles.matatuImage2} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={modalStyles.modalImageContainer}></div>
      </Modal>
    </div>
  );
};

export default Invite;
