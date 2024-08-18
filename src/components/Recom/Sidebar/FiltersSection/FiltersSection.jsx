//FiltersSection.jsx
import React from 'react';
import {
  FiltersSectionContainer,
  FilteText,
  InputWrapper,
  Input,
  ApplyButton,
} from './FiltersSection.styled';

const FiltersSection = ({
  onApplyFilters,
  filterTitle,
  setFilterTitle,
  filterAuthor,
  setFilterAuthor,
}) => {
  return (
    <FiltersSectionContainer>
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
      <ApplyButton onClick={onApplyFilters}>To apply</ApplyButton>
    </FiltersSectionContainer>
  );
};

export default FiltersSection;
