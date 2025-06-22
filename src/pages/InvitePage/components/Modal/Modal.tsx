import React from 'react';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  hideCloseButton?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  hideCloseButton,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {!hideCloseButton && (
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
