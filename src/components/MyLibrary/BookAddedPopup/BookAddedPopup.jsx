//BookAddedPopup.jsx
import React, { useEffect } from 'react';
import {
  PopupOverlay,
  PopupContainer,
  PopupCloseButton,
  PopupThumbsUpIcon,
  PopupTextContainer,
  PopupTitle,
  PopupMessage,
} from './BookAddedPopup.styled';
import closeIcon from '../../../assets/svg/x-close.svg'; // Assuming this path for the close icon

const BookAddedPopup = ({ onClose }) => {
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
        <PopupThumbsUpIcon>👍</PopupThumbsUpIcon>
        <PopupTextContainer>
          <PopupTitle>Good job</PopupTitle>
          <PopupMessage>
            Your book is now in <span>the library!</span> The joy knows no
            bounds and now you can start your training.
          </PopupMessage>
        </PopupTextContainer>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default BookAddedPopup;
