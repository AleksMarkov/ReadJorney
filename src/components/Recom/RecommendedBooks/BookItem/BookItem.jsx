//BookItem.jsx
import React from 'react';
import {
  BookItemContainer,
  BookCover,
  BookBlock,
  BookTitle,
  BookAuthor,
} from './BookItem.styled';
import placeholderImage from '../../../../assets/images/tor.jpg';

const BookItem = ({ book, onClick }) => {
  return (
    <BookItemContainer onClick={onClick}>
      {book.imageUrl ? (
        <BookCover src={book.imageUrl} alt={book.title} />
      ) : (
        <BookCover src={placeholderImage} alt="Book cover is not available" />
      )}
      <BookBlock>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>
      </BookBlock>
    </BookItemContainer>
  );
};

export default BookItem;
