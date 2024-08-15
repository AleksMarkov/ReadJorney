//BookModal.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../context/AuthContext';
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
} from './BookModal.styled';
import closeIcon from '../../../assets/svg/x-close.svg';
import {
  addBookByIdToUserLibrary,
  fetchUserBooks,
} from '../../../services/bookAddService';
import { setUserBooks } from '../../../redux/userBooksSlice';
import Notification from '../../Notification/Notification';
import BookAddedPopup from '../../MyLibrary/BookAddedPopup/BookAddedPopup';

const BookModal = ({ book, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const [notification, setNotification] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAddBook = async () => {
    if (!user || !user.token) {
      setNotification('User is not authenticated');
      return;
    }

    try {
      const result = await addBookByIdToUserLibrary(book._id, user.token);
      if (result.success) {
        setIsPopupVisible(true);
        const booksResult = await fetchUserBooks(user.token);
        if (booksResult.success) {
          dispatch(setUserBooks(booksResult.data));
        }
      } else {
        setNotification(result.message);
      }
    } catch (error) {
      setNotification('An unexpected error occurred.');
    }
  };

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
        <AddButton onClick={handleAddBook}>Add to library</AddButton>
        {notification && (
          <Notification
            message={notification}
            onClose={() => setNotification(null)}
          />
        )}
        {isPopupVisible && (
          <BookAddedPopup
            onClose={() => {
              setIsPopupVisible(false);
              onClose();
            }}
          />
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default BookModal;
