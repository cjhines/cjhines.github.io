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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState(null);
  const [hasError, setHasError] = useState(false);

  const sendRSVP = (attending: boolean) => {
    try {
      fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          guests: 1,
          attending,
        }),
      })
        .then((res) => {
          console.log(res);
          if (!res.ok || res.status !== 200) {
            setHasError(true);
            return;
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.success) {
            console.log('Success!');
            setResponse(attending);
          } else {
            setHasError(true);
          }
        });
    } catch (error) {
      setHasError(true);
    }
  };

  const renderErrorContent = () => (
    <>
      <div className={styles.submittedContainer}>
        <h3 className={styles.subtitle}>
          Something went wrong
          <br />
          <br />
          Try again later or with a different network connection
        </h3>
      </div>
    </>
  );

  const renderSubmittedContent = () => (
    <>
      <div className={styles.submittedContainer}>
        <h3 className={styles.subtitle}>
          {response
            ? 'Looking forward to celebrating with you!'
            : 'Hope to see you there!'}
        </h3>
      </div>
    </>
  );

  const onCloseModal = () => {
    setIsModalOpen(false);
    setResponse(null);
    setHasError(false);
  };

  const renderInitialContent = () => (
    <>
      <div className={styles.detailsSection}>
        <h3 className={styles.subtitle}>Where</h3>
        <h4 className={styles.body}>
          KAOS Berlin, Schöneweide
          <br />
          S-Bahn / Tram
          <br />(
          <a
            href="https://g.co/kgs/WZ5gMvw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
          ) (
          <a
            href="https://g.co/kgs/WZ5gMvw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Map
          </a>
          )
        </h4>
        <br />
        <h3 className={styles.subtitle}>When</h3>
        <h4 className={styles.body}>Saturday, July 12th</h4>
        <h4 className={styles.body}>15:00-22:00</h4>
        <br />
        <h3 className={styles.subtitle}>Gifts</h3>
        <h4 className={styles.body}>
          We're moving 6200 kilometers, please no gifts 😅
          <br />
          <br />
          Contributions to expenses and furnishing from scratch are very
          appreciated
          <br />
          (Link)
          <br />
        </h4>
        <br />
        <h3 className={styles.subtitle}>Alcohol</h3>
        <h4 className={styles.body}>
          There is a staffed bar. We're putting enough cash back there for a few
          rounds each
        </h4>
        <br />
        <h3 className={styles.subtitle}>Food</h3>
        <h4 className={styles.body}>
          We're organising a nice buffet, but your cakes / salads / finger food
          will be met with eager, hungry faces
        </h4>
        <br />
        <h3 className={styles.subtitle}>Kids</h3>
        <h4 className={styles.body}>
          Kids are welcome. There is a kids play area, but be aware that the
          venue is rather near the Spree
        </h4>
        <h3 className={styles.arrows}>🢃 🢃 🢃 🢃</h3>
      </div>
      <div className={styles.rsvpSection}>
        <h2 className={styles.title}>Let us know you're coming</h2>
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
    </>
  );

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

      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <div className={styles.modalContainer}>
          {response === null && !hasError && renderInitialContent()}
          {response !== null && renderSubmittedContent()}
          {hasError && renderErrorContent()}
        </div>
      </Modal>
    </div>
  );
};

export default Invite;
