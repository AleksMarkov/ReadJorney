//Recommended.jsx
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import { Container, BodySection } from './Recommended.styled';
import BookModal from '../../components/Recom/BookModal/BookModal';
import { AuthContext } from '../../context/AuthContext';
import { BookContext } from '../../context/BookContext';
import { selectBookLS } from '../../redux/bookLSSlice';
import { useScreenSize } from '../../hooks/useScreenSize';
import Sidebar from '../../components/Recom/Sidebar/Sidebar';
import RecommendedBooks from '../../components/Recom/RecommendedBooks/RecommendedBooks';

const Recommended = () => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(BookContext);
  const bookLS = useSelector(selectBookLS);
  const screenSize = useScreenSize();
  const [filterTitle, setFilterTitle] = useState('');
  const [filterAuthor, setFilterAuthor] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(bookLS);
  const getDisplayCount = useCallback(() => {
    if (screenSize >= 320 && screenSize <= 767) {
      return 2;
    } else if (screenSize >= 768 && screenSize <= 1439) {
      return 8;
    } else if (screenSize >= 1440) {
      return 10;
    }
    return 10;
  }, [screenSize]);

  useEffect(() => {
    setVisibleStart(0);
    setVisibleEnd(getDisplayCount());
  }, [getDisplayCount]);

  useEffect(() => {
    const filtered = bookLS.filter(book => {
      return (
        (filterTitle === '' ||
          book.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
        (filterAuthor === '' ||
          book.author.toLowerCase().includes(filterAuthor.toLowerCase()))
      );
    });
    setFilteredBooks(filtered);
  }, [bookLS, filterTitle, filterAuthor]);

  const handleApplyFilters = () => {
    setVisibleStart(0);
    setVisibleEnd(getDisplayCount());
  };

  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleEnd, setVisibleEnd] = useState(getDisplayCount());

  const handleNext = () => {
    const displayCount = getDisplayCount();
    const newStart = visibleStart + displayCount;
    const newEnd = visibleEnd + displayCount;

    if (newEnd <= filteredBooks.length) {
      setVisibleStart(newStart);
      setVisibleEnd(newEnd);
    } else if (newEnd > filteredBooks.length) {
      setVisibleStart(newStart);
      setVisibleEnd(filteredBooks.length);
    }
  };

  const handlePrevious = () => {
    const displayCount = getDisplayCount();
    const newStart = visibleStart - displayCount;
    const newEnd = visibleEnd - displayCount;

    if (newStart >= 0) {
      setVisibleStart(newStart);
      setVisibleEnd(newEnd);
    } else if (newStart < 0) {
      setVisibleStart(0);
      setVisibleEnd(getDisplayCount());
    }
  };

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = book => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Header />
      <BodySection>
        <Sidebar
          onApplyFilters={handleApplyFilters}
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterAuthor={filterAuthor}
          setFilterAuthor={setFilterAuthor}
        />
        <RecommendedBooks
          filteredBooks={filteredBooks}
          visibleStart={visibleStart}
          visibleEnd={visibleEnd}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleBookClick={handleBookClick}
          loading={loading}
        />
      </BodySection>
      {selectedBook && <BookModal book={selectedBook} onClose={closeModal} />}
    </Container>
  );
};

export default Recommended;
