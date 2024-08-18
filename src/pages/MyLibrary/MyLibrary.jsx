//MyLibrary.jsx
import React, { useState, useEffect, useContext, useCallback } from 'react';
import Header from '../../pages/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../../components/Notification/Notification';
import BookModalRead from '../../components/MyLibrary/BookModalRead/BookModalRead';
import BookAddedPopup from '../../components/MyLibrary/BookAddedPopup/BookAddedPopup';
import BookDeletePopup from '../../components/MyLibrary/BookDeletePopup/BookDeletePopup';
import SidebarSection from '../../components/MyLibrary/SidebarSection/SidebarSection';
import RecommendedSection from '../../components/MyLibrary/RecommendedSection/RecommendedSection';
import { Container, BodySection } from './MyLibrary.styled';
import { AuthContext } from '../../context/AuthContext';
import { BookContext } from '../../context/BookContext';
import {
  setUserBooks,
  deleteUserBook,
  selectUserBooks,
} from '../../redux/userBooksSlice';
import { selectBookLS } from '../../redux/bookLSSlice';
import {
  addBookToUserLibrary,
  fetchUserBooks,
} from '../../services/bookAddService';
import { deleteBookFromUserLibrary } from '../../services/bookDeleteService';

const MyLibrary = () => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(BookContext);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);
  const bookLS = useSelector(selectBookLS);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(userBooks);
  const [notification, setNotification] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All books');

  const filterBooks = useCallback(
    filter => {
      if (filter === 'All books') {
        setFilteredBooks(userBooks);
      } else {
        const filtered = userBooks.filter(book => {
          if (filter === 'Unread') return book.status === 'unread';
          if (filter === 'In progress') return book.status === 'in-progress';
          if (filter === 'Done') return book.status === 'done';
          return true;
        });
        setFilteredBooks(filtered);
      }
    },
    [userBooks]
  );

  const handleBookClick = book => {
    setSelectedBook(book);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleAddBook = async data => {
    try {
      const result = await addBookToUserLibrary(data, user.token);
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

  const handleDeleteClick = book => {
    setBookToDelete(book);
    setIsDeletePopupVisible(true);
  };

  const handleDeleteConfirm = async () => {
    setIsDeletePopupVisible(false);
    if (bookToDelete) {
      const result = await deleteBookFromUserLibrary(
        bookToDelete._id,
        user.token
      );
      if (result.success) {
        setNotification(result.data.message);
        dispatch(deleteUserBook(bookToDelete._id));
      } else {
        setNotification(result.message);
      }
    }
  };

  useEffect(() => {
    if (userBooks) {
      filterBooks(selectedFilter);
    }
  }, [userBooks, selectedFilter, filterBooks]);

  return (
    <Container>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      {isPopupVisible && (
        <BookAddedPopup onClose={() => setIsPopupVisible(false)} />
      )}
      {isDeletePopupVisible && (
        <BookDeletePopup
          book={bookToDelete}
          onClose={() => setIsDeletePopupVisible(false)}
          onDelete={handleDeleteConfirm}
        />
      )}
      <Header />
      <BodySection>
        <SidebarSection onAddBook={handleAddBook} recommendedBooks={bookLS} />
        <RecommendedSection
          loading={loading}
          filteredBooks={filteredBooks}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          onBookClick={handleBookClick}
          onDeleteClick={handleDeleteClick}
        />
      </BodySection>
      {isModalVisible && (
        <BookModalRead book={selectedBook} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default MyLibrary;
