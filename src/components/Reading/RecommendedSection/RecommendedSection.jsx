//RecommendedSection.jsx
import React, { useEffect } from 'react';
import {
  StyledRecommendedSection,
  RecommendedBlock,
  BookItem,
  RecomText,
  BookAuthor,
  BookTitle,
  BookBlock,
  BookCover,
  RedBlock,
  RecomTime,
} from './RecommendedSection.styled';
import placeholderImage from '../../../assets/images/tor.jpg';
import redcircule from '../../../assets/svg/redsircule.svg';
import redsguare from '../../../assets/svg/redsquare.svg';

const RecommendedSection = ({
  readBook,
  readBookStatus,
  condition,
  showTimeLeft,
}) => {
  useEffect(() => {}, [condition, showTimeLeft]);

  return (
    <StyledRecommendedSection>
      <RecommendedBlock>
        <RecomText>My reading</RecomText>
        {showTimeLeft && readBook.timeLeftToRead?.hours !== undefined && (
          <RecomTime>
            {`${readBook.timeLeftToRead.hours} hours `}
            {readBook.timeLeftToRead.minutes !== undefined &&
              `${readBook.timeLeftToRead.minutes} minutes `}
            {'left'}
          </RecomTime>
        )}
      </RecommendedBlock>
      {readBookStatus === 'loading' && (
        <p
          style={{
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '18px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          {' '}
          Loading book...
        </p>
      )}
      {readBookStatus === 'succeeded' && readBook && (
        <BookItem>
          {readBook.imageUrl ? (
            <BookCover src={readBook.imageUrl} alt="book cover" />
          ) : (
            <BookCover
              src={placeholderImage}
              alt="Book cover is not available"
            />
          )}
          <BookBlock>
            <BookTitle>{readBook.title}</BookTitle>
            <BookAuthor>{readBook.author}</BookAuthor>
          </BookBlock>
          <RedBlock
            src={condition === 'active' ? redsguare : redcircule}
            alt={condition === 'active' ? 'red square' : 'red circle'}
          />
        </BookItem>
      )}
    </StyledRecommendedSection>
  );
};

export default RecommendedSection;
