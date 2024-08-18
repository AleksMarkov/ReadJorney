// BookItem.jsx
import React from 'react';
import {
  BookItemWrapper,
  BookCover,
  BookBlock,
  TextBlock,
  BookTitle,
  BookAuthor,
  DelBlock,
} from './BookItem.styled';
import deleteIcon from '../../../assets/svg/delete.svg';
import placeholderImage from '../../../assets/images/tor.jpg';
const BookItem = ({ book, onClick, onDeleteClick }) => {
  return (
    <BookItemWrapper>
      <BookCover
        onClick={onClick}
        src={book.imageUrl || placeholderImage}
        alt={book.imageUrl ? book.title : 'Book cover is not available'}
      />
      <BookBlock>
        <TextBlock>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
        </TextBlock>
        <DelBlock src={deleteIcon} alt="red basket" onClick={onDeleteClick} />
      </BookBlock>
    </BookItemWrapper>
  );
};
export default BookItem;
