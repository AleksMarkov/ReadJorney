//SidebarSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import bookSchema from '../../../schemas/bookSchema';
import RecBookItem from '../RecBookItem/RecBookItem';
import {
  SidebarSectionWrapper,
  FiltersSection,
  FilteText,
  InputWrapper,
  NumberInput,
  ApplyButton,
  WorkoutSection,
  WorkoutTitle,
  MyLibraryBlok,
  MyLibraryLink,
  Arrow,
  RecBookList,
  ErrorMessage,
} from './SidebarSection.styled';
import leftarrow from '../../../assets/svg/login.svg';

const SidebarSection = ({ onAddBook, recommendedBooks }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

  const handleRecBookClick = book => {
    reset(book);
  };

  return (
    <SidebarSectionWrapper>
      <FiltersSection>
        <FilteText>{'Create your library:'}</FilteText>
        <form onSubmit={handleSubmit(onAddBook)}>
          <InputWrapper>
            <NumberInput
              type="text"
              name="title"
              placeholder="Book title"
              {...register('title')}
            />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <NumberInput
              type="text"
              name="author"
              placeholder="The author"
              {...register('author')}
            />
            {errors.author && (
              <ErrorMessage>{errors.author.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <NumberInput
              type="text"
              name="totalPages"
              placeholder="Number of pages"
              {...register('totalPages')}
            />
            {errors.totalPages && (
              <ErrorMessage>{errors.totalPages.message}</ErrorMessage>
            )}
          </InputWrapper>
          <ApplyButton type="submit">Add book</ApplyButton>
        </form>
      </FiltersSection>
      <WorkoutSection>
        <WorkoutTitle>Recommended books</WorkoutTitle>
        <RecBookList>
          {recommendedBooks.slice(0, 3).map(book => (
            <RecBookItem
              key={book._id}
              book={book}
              onClick={() => handleRecBookClick(book)}
            />
          ))}
        </RecBookList>
        <Link to="/recommended">
          <MyLibraryBlok>
            <MyLibraryLink>Home</MyLibraryLink>
            <Arrow src={leftarrow} alt="left arrow" />
          </MyLibraryBlok>
        </Link>
      </WorkoutSection>
    </SidebarSectionWrapper>
  );
};

export default SidebarSection;
