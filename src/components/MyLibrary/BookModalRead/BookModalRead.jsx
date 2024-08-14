//BookModalRead.jsx
import React, { useEffect } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  BookImage,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookPages,
  AddButton,
} from './BookModalRead.styled';
import closeIcon from '../../../assets/svg/x-close.svg';

const BookModalRead = ({ book, onClose }) => {
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
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>
        <BookImage src={book.imageUrl} alt={book.title} />
        <BookInfo>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          <BookPages>{book.totalPages} pages</BookPages>
        </BookInfo>
        <AddButton>Start reading</AddButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default BookModalRead;
