//RecommendedDesk.jsx
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../pages/Header/Header';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {
  Container,
  BodySection,
  RecommendedSection,
  SidebarSection,
  FiltersSection,
  FilteText,
  InputWrapper,
  Input,
  ApplyButton,
  WorkoutSection,
  WorkoutTitle,
  WorkoutStep,
  WorkoutIcon,
  WorkoutDescription,
  MyLibraryBlok,
  MyLibraryLink,
  Arrow,
  Quoteoftheday,
  RecommendedBlock,
  RecomText,
  ArrowNavigation,
  ArrowButton,
  BookList,
  BookItem,
  BookCover,
  BookTitle,
  BookAuthor,
  BookBlock,
} from './RecommendedDesk.styled';
import leftarrow from '../../assets/svg/login.svg';
import chevronleft from '../../assets/svg/chevron-left.svg';
import chevronright from '../../assets/svg/chevron-right.svg';
import BookModal from '../../components/Recom/BookModal/BookModal';
import { AuthContext } from '../../context/AuthContext';
import { BookContext } from '../../context/BookContext';
import { selectBookLS } from '../../redux/bookLSSlice';
import { useScreenSize } from '../../hooks/useScreenSize';
import placeholderImage from '../../assets/images/tor.jpg';

const RecommendedDesk = () => {
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
        <SidebarSection>
          <FiltersSection>
            <FilteText>Filters:</FilteText>
            <InputWrapper>
              <Input
                type="text"
                placeholder="Book title"
                value={filterTitle}
                onChange={e => setFilterTitle(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="text"
                placeholder="The author"
                value={filterAuthor}
                onChange={e => setFilterAuthor(e.target.value)}
              />
            </InputWrapper>
            <ApplyButton onClick={handleApplyFilters}>To apply</ApplyButton>
          </FiltersSection>
          <WorkoutSection>
            <WorkoutTitle>Start your workout</WorkoutTitle>
            <WorkoutStep>
              <WorkoutIcon>1</WorkoutIcon>
              <WorkoutDescription>
                Create a personal library:{' '}
                <span>add the books you intend to read to it.</span>
              </WorkoutDescription>
            </WorkoutStep>
            <WorkoutStep>
              <WorkoutIcon>2</WorkoutIcon>
              <WorkoutDescription>
                Create your first workout:{' '}
                <span>define a goal, choose a period, start training.</span>
              </WorkoutDescription>
            </WorkoutStep>
            <Link to="/library">
              <MyLibraryBlok>
                <MyLibraryLink>My library</MyLibraryLink>
                <Arrow src={leftarrow} alt="left arrow" />
              </MyLibraryBlok>
            </Link>
          </WorkoutSection>
          <Quoteoftheday className="emoji-books">
            <p>
              "Books are <span>windows</span> to the world, and reading is a
              journey into the unknown."
            </p>
          </Quoteoftheday>
        </SidebarSection>
        <RecommendedSection>
          <RecommendedBlock>
            <RecomText>Recommended</RecomText>
            <ArrowNavigation>
              <ArrowButton
                onClick={handlePrevious}
                disabled={visibleStart === 0}
                style={{ opacity: visibleStart === 0 ? 0.2 : 1 }}
              >
                <img src={chevronleft} alt="Previous" />
              </ArrowButton>
              <ArrowButton
                onClick={handleNext}
                disabled={visibleEnd >= filteredBooks.length || loading}
                style={{
                  opacity:
                    visibleEnd >= filteredBooks.length || loading ? 0.2 : 1,
                }}
              >
                <img src={chevronright} alt="Next" />
              </ArrowButton>
            </ArrowNavigation>
          </RecommendedBlock>
          <BookList>
            {loading && filteredBooks.length === 0 ? (
              <Loader />
            ) : (
              filteredBooks.slice(visibleStart, visibleEnd).map(book => (
                <BookItem key={book._id} onClick={() => handleBookClick(book)}>
                  {book.imageUrl ? (
                    <BookCover src={book.imageUrl} alt={book.title} />
                  ) : (
                    <BookCover
                      src={placeholderImage}
                      alt="Book cover is not available"
                    />
                  )}
                  <BookBlock>
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.author}</BookAuthor>
                  </BookBlock>
                </BookItem>
              ))
            )}
          </BookList>
        </RecommendedSection>
      </BodySection>
      {selectedBook && <BookModal book={selectedBook} onClose={closeModal} />}
    </Container>
  );
};

export default RecommendedDesk;
