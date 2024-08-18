//RecommendedBooks.jsx
import React from 'react';
import {
  RecommendedSection,
  RecommendedBlock,
  RecomText,
  ArrowNavigation,
  ArrowButton,
  BookList,
} from './RecommendedBooks.styled';
import BookItem from './BookItem/BookItem';
import Loader from '../../Loader/Loader';
import chevronleft from '../../../assets/svg/chevron-left.svg';
import chevronright from '../../../assets/svg/chevron-right.svg';

const RecommendedBooks = ({
  filteredBooks,
  visibleStart,
  visibleEnd,
  handlePrevious,
  handleNext,
  handleBookClick,
  loading,
}) => {
  return (
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
              opacity: visibleEnd >= filteredBooks.length || loading ? 0.2 : 1,
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
          filteredBooks
            .slice(visibleStart, visibleEnd)
            .map(book => (
              <BookItem
                key={book._id}
                book={book}
                onClick={() => handleBookClick(book)}
              />
            ))
        )}
      </BookList>
    </RecommendedSection>
  );
};

export default RecommendedBooks;
