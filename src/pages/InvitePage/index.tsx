import React, { useState } from 'react';

import Modal from './components/Modal/Modal';
import styles from './InvitePage.module.css';
import modalStyles from './components/Modal/Modal.module.css';
import bye from './assets/bye.png';
import floralPattern from './assets/floralPattern.svg';
import jambo from './assets/jambo.png';
import matatu from './assets/matatu.png';
import matatu2 from './assets/matatu2.png';
import portrait1 from './assets/portrait1.png';
import portrait2 from './assets/portrait2.png';
import berlinTower from './assets/berlinTower.png';
import nairobiTower from './assets/nairobiTower.png';
import wavePattern from './assets/wavePattern.svg';
import ubahn from './assets/ubahn.png';

const Invite: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sendRSVP = (attending: boolean) => {
    fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        guests: guestCount,
        attending,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log('Success!');
          setDidSubmit(true);
        } else {
          setHasError(true);
        }
      });
  };

  const getGuestCountLabel = (num: number) => {
    switch (num) {
      case 0:
        return 'Just invitees';
      case 1:
        return 'With a friend';
    }
  };

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
      <div className={styles.ubahnContainer}>
        <img src={ubahn} alt="ubahn" className={styles.ubahnImage} />
      </div>

      <img
        src={berlinTower}
        alt="berlinTower"
        className={styles.berlinTowerImage}
      />
      <img
        src={nairobiTower}
        alt="nairobiTower"
        className={styles.nairobiTowerImage}
      />
      <div className={styles.content}>
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
        <div className={styles.modalContainer}>
          <div className={styles.detailsSection}>
            <h1>INVITE</h1>
          </div>
          <div className={styles.rsvpSection}>
            <h2 className={styles.rsvpTitle}>Let us know you're coming!</h2>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                placeholder="Name / Names"
              />
            </div>
            <div className={styles.formGroup}>
              <select
                id="guests"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className={styles.select}
              >
                {[0, 1].map((num) => (
                  <option key={num} value={num}>
                    {getGuestCountLabel(num)}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => sendRSVP(true)}
              className={styles.sendButton}
              disabled={!name.trim()}
            >
              See you there 🎉
            </button>
            <button
              onClick={() => sendRSVP(false)}
              className={styles.sendButton}
              disabled={!name.trim()}
            >
              Can't make it 😔
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Invite;
