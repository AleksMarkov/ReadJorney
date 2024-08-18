//RecommendedSection.jsx
import React, { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import {
  RecommendedSectionWrapper,
  RecommendedBlock,
  RecomText,
  BookList,
  EmptyMessageWrapper,
  EmptyMessageIcon,
  EmptyMessageText,
  FilterContainer,
  FilterButton,
  FilterDropdown,
  FilterOption,
} from './RecommendedSection.styled';
import Loader from '../../Loader/Loader';
import chevronDown from '../../../assets/svg/chevronDown.svg';
import chevronUp from '../../../assets/svg/chevronUpp.svg';
const RecommendedSection = ({
  filteredBooks,
  selectedFilter,
  onFilterChange,
  onBookClick,
  onDeleteClick,
  loading,
}) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };
  const selectFilterOption = option => {
    onFilterChange(option);
    setFilterVisible(false);
  };
  return (
    <RecommendedSectionWrapper>
      <RecommendedBlock>
        <RecomText>My library</RecomText>
        <FilterContainer>
          <FilterButton onClick={toggleFilter}>
            {selectedFilter}
            <img
              src={filterVisible ? chevronUp : chevronDown}
              alt={filterVisible ? 'chevron up' : 'chevron down'}
            />
          </FilterButton>
          {filterVisible && (
            <FilterDropdown>
              <FilterOption onClick={() => selectFilterOption('Unread')}>
                Unread
              </FilterOption>
              <FilterOption onClick={() => selectFilterOption('In progress')}>
                In progress
              </FilterOption>
              <FilterOption onClick={() => selectFilterOption('Done')}>
                Done
              </FilterOption>
              <FilterOption onClick={() => selectFilterOption('All books')}>
                All books
              </FilterOption>
            </FilterDropdown>
          )}
        </FilterContainer>
      </RecommendedBlock>
      {loading ? (
        <Loader />
      ) : filteredBooks.length === 0 ? (
        <EmptyMessageWrapper>
          <EmptyMessageIcon />
          <EmptyMessageText>
            To start training, add <span>some of your books</span> or from the
            recommended ones.
          </EmptyMessageText>
        </EmptyMessageWrapper>
      ) : (
        <BookList>
          {filteredBooks.map(book => (
            <BookItem
              key={book._id}
              book={book}
              onClick={() => onBookClick(book)}
              onDeleteClick={() => onDeleteClick(book)}
            />
          ))}
        </BookList>
      )}
    </RecommendedSectionWrapper>
  );
};
export default RecommendedSection;
