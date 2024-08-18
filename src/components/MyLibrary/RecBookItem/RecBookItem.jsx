// RecBookItem.jsx
import React from 'react';
import {
  RecBookItemWrapper,
  RecBookCover,
  RecBookBlock,
  RecBookTitle,
  RecBookAuthor,
} from './RecBookItem.styled';
import placeholderImage from '../../../assets/images/tor.jpg';
const RecBookItem = ({ book, onClick }) => {
  return (
    <RecBookItemWrapper onClick={onClick}>
      <RecBookCover
        src={book.imageUrl || placeholderImage}
        alt={book.imageUrl ? book.title : 'Book cover is not available'}
      />
      <RecBookBlock>
        <RecBookTitle>{book.title}</RecBookTitle>
        <RecBookAuthor>{book.author}</RecBookAuthor>
      </RecBookBlock>
    </RecBookItemWrapper>
  );
};
export default RecBookItem;
