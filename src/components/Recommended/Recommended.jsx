//Recommended.jsx
import React from 'react';
import {
  Container,
  Header,
  Logo,
  UserMenu,
  FilterSection,
  FilterTitle,
  FilterInput,
  ApplyButton,
  WorkoutSection,
  WorkoutTitle,
  WorkoutStep,
  StepNumber,
  StepDescription,
  LibraryLink,
  ArrowIcon,
  RecommendedSection,
  RecommendedTitle,
  BooksContainer,
  BookCard,
  BookImage,
  BookTitle,
  BookAuthor,
  NavigationDots,
} from './Recommended.styled.jsx';
import logoImage from '../../assets/svg/Logomobile.svg';
import userMenuIcon from '../../assets/svg/usermenu.svg';
import arrowIcon from '../../assets/svg/login.svg';

const Recommended = () => {
  return (
    <Container>
      <Header>
        <Logo src={logoImage} alt="Logo" />
        <UserMenu src={userMenuIcon} alt="User Menu" />
      </Header>

      <FilterSection>
        <FilterTitle>Filters:</FilterTitle>
        <FilterInput placeholder="Book title: Enter text" />
        <FilterInput placeholder="The author: Enter text" />
        <ApplyButton>To apply</ApplyButton>
      </FilterSection>

      <WorkoutSection>
        <WorkoutTitle>Start your workout</WorkoutTitle>
        <WorkoutStep>
          <StepNumber>1</StepNumber>
          <StepDescription>
            Create a personal library: add the books you intend to read to it.
          </StepDescription>
        </WorkoutStep>
        <WorkoutStep>
          <StepNumber>2</StepNumber>
          <StepDescription>
            Create your first workout: define a goal, choose a period, start
            training.
          </StepDescription>
        </WorkoutStep>
        <LibraryLink>
          My library <ArrowIcon src={arrowIcon} alt="Arrow Icon" />
        </LibraryLink>
      </WorkoutSection>

      <RecommendedSection>
        <RecommendedTitle>Recommended</RecommendedTitle>
        <BooksContainer>
          <BookCard>
            <BookImage src="book1.jpg" alt="Book 1" />
            <BookTitle>Lovers of Justice</BookTitle>
            <BookAuthor>Yuri Andrukhovych</BookAuthor>
          </BookCard>
          <BookCard>
            <BookImage src="book2.jpg" alt="Book 2" />
            <BookTitle>It doesn't hurt</BookTitle>
            <BookAuthor>Kateryna Babkina</BookAuthor>
          </BookCard>
        </BooksContainer>
        <NavigationDots>
          <div></div>
          <div></div>
        </NavigationDots>
      </RecommendedSection>
    </Container>
  );
};

export default Recommended;
