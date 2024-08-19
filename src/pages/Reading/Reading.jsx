//Reading.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../pages/Header/Header';
import SidebarSection from '../../components/Reading/SidebarSection/SidebarSection';
import RecommendedSection from '../../components/Reading/RecommendedSection/RecommendedSection';
import BookReadPopup from '../../components/Reading/BookReadPopup/BookReadPopup';
import Notification from '../../components/Notification/Notification';
import { fetchBookById } from '../../services/bookReadService';
import {
  setReadBook,
  setReadBookStatus,
  setReadBookError,
} from '../../redux/readBookSlice';
import { updateUserBookStatus } from '../../redux/userBooksSlice';
import { Container, BodySection } from './Reading.styled';

const Reading = () => {
  const [notification, setNotification] = useState(null);
  const [isBookReadPopupVisible, setIsBookReadPopupVisible] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const bookId = state?.book?._id;
  const readBook = useSelector(state => state.readBook.book);
  const readBookStatus = useSelector(state => state.readBook.status);
  const [condition, setCondition] = useState('inactive');
  const [showTimeLeft, setShowTimeLeft] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      const token = localStorage.getItem('token');
      if (bookId && token) {
        dispatch(setReadBookStatus('loading'));
        try {
          const response = await fetchBookById(bookId, token);
          if (response.success) {
            dispatch(setReadBook(response.data));
            const lastProgress =
              response.data.progress[response.data.progress.length - 1];
            const newStatus =
              lastProgress?.status === 'active' ? 'in-progress' : 'done';
            dispatch(updateUserBookStatus({ bookId, status: newStatus }));
          } else {
            dispatch(setReadBookError(response.message));
            setNotification(response.message);
          }
        } catch (error) {
          dispatch(setReadBookError(error.message));
          setNotification(error.message);
        }
      }
    };

    fetchBook();
  }, [bookId, dispatch]);

  if (!readBook) {
    return <p>Loading book...</p>;
  }

  return (
    <Container>
      {isBookReadPopupVisible && (
        <BookReadPopup onClose={() => setIsBookReadPopupVisible(false)} />
      )}
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <Header />
      <BodySection>
        <SidebarSection
          readBook={readBook}
          setNotification={setNotification}
          setIsBookReadPopupVisible={setIsBookReadPopupVisible}
          setCondition={setCondition}
          condition={condition}
          setShowTimeLeft={setShowTimeLeft}
        />
        <RecommendedSection
          readBook={readBook}
          readBookStatus={readBookStatus}
          condition={condition}
          showTimeLeft={showTimeLeft}
        />
      </BodySection>
    </Container>
  );
};

export default Reading;
