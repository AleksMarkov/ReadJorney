//BookModalRead.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import placeholderImage from '../../../assets/images/tor.jpg';

const BookModalRead = ({ book, onClose }) => {
  const navigate = useNavigate();

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

  const startReading = () => {
    navigate('/reading', { state: { book } });
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>

        {book.imageUrl ? (
          <BookImage src={book.imageUrl} alt={book.title} />
        ) : (
          <BookImage src={placeholderImage} alt="Book cover is not available" />
        )}
        <BookInfo>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          <BookPages>{book.totalPages} pages</BookPages>
        </BookInfo>
        <AddButton onClick={startReading}>Start reading</AddButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default BookModalRead;
