//BookReadPopup.jsx
import React, { useEffect } from 'react';
import {
  PopupOverlay,
  PopupContainer,
  PopupCloseButton,
  PopupThumbsUpIcon,
  PopupTextContainer,
  PopupTitle,
  PopupMessage,
} from './BookReadPopup.styled';
import closeIcon from '../../../assets/svg/x-close.svg'; // Assuming this path for the close icon

const BookReadPopup = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <PopupOverlay onClick={handleOverlayClick}>
      <PopupContainer>
        <PopupCloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </PopupCloseButton>
        <PopupThumbsUpIcon>📚</PopupThumbsUpIcon>
        <PopupTextContainer>
          <PopupTitle>The book is read</PopupTitle>
          <PopupMessage>
            It was an <span>exciting journey</span>, where each page revealed
            new horizons, and the characters became inseparable friends.
          </PopupMessage>
        </PopupTextContainer>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default BookReadPopup;
