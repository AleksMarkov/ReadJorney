//BookDeletePopup.jsx
import React, { useEffect } from 'react';
import {
  PopupOverlay,
  PopupContainer,
  PopupCloseButton,
  PopupTextContainer,
  PopupTitle,
  PopupMessage,
  PopupDeleteButton,
} from './BookDeletePopup.styled'; // Создайте файл со стилями
import closeIcon from '../../../assets/svg/x-close.svg';

const BookDeletePopup = ({ book, onClose, onDelete }) => {
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
        <PopupTextContainer>
          <PopupTitle>Delete Book</PopupTitle>
          <PopupMessage>
            Are you sure you want to delete: <span>{book.title}</span> by{' '}
            <span>{book.author}</span>?
          </PopupMessage>
        </PopupTextContainer>
        <PopupDeleteButton onClick={onDelete}>DELETE</PopupDeleteButton>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default BookDeletePopup;
