//RecommendedDesk.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  HeaderSection,
  MenuSection,
  MobLogo,
  LogoutButton,
  UserIcon,
  UserName,
  UserSection,
  BodySection,
  GetButton,
  RecommendedSection,
  SidebarSection,
  FiltersSection,
  FilteText,
  InputWrapper,
  Input,
  ApplyButton,
  BookList,
  BookItem,
  BookCover,
  BookTitle,
  BookAuthor,
  WorkoutSection,
  WorkoutTitle,
  WorkoutStep,
  WorkoutIcon,
  WorkoutDescription,
  MyLibraryLink,
  ArrowNavigation,
  ArrowButton,
} from './RecommendedDesk.styled';
import logotablet from '../../../assets/svg/Logotablet.svg';

const RecommendedDesk = () => {
  return (
    <Container>
      <HeaderSection>
        <MobLogo src={logotablet} alt="logo mobile" />
        <MenuSection>
          <Link to="#home">
            <GetButton>Home</GetButton>
          </Link>
          <Link to="#my-library">
            <GetButton>My Library</GetButton>
          </Link>
        </MenuSection>
        <UserSection>
          <UserIcon>I</UserIcon>
          <UserName>Ilona Ratushniak</UserName>
          <LogoutButton>Log out</LogoutButton>
        </UserSection>
      </HeaderSection>
      <BodySection>
        <SidebarSection>
          <FiltersSection>
            <FilteText>Filters:</FilteText>
            <InputWrapper>
              <Input type="text" placeholder="Book title" />
            </InputWrapper>
            <InputWrapper>
              <Input type="text" placeholder="The author" />
            </InputWrapper>
            <ApplyButton>To apply</ApplyButton>
          </FiltersSection>
          <WorkoutSection>
            <WorkoutTitle>Start your workout</WorkoutTitle>
            <WorkoutStep>
              <WorkoutIcon>1</WorkoutIcon>
              <WorkoutDescription>
                Create a personal library: add the books you intend to read to
                it.
              </WorkoutDescription>
            </WorkoutStep>
            <WorkoutStep>
              <WorkoutIcon>2</WorkoutIcon>
              <WorkoutDescription>
                Create your first workout: define a goal, choose a period, start
                training.
              </WorkoutDescription>
            </WorkoutStep>
            <MyLibraryLink>My library</MyLibraryLink>
          </WorkoutSection>
        </SidebarSection>
        <RecommendedSection>
          <h2>Recommended</h2>
          <BookList>
            <BookItem>
              <BookCover src="/path/to/image1.png" alt="Lovers of Justice" />
              <BookTitle>Lovers of Justice</BookTitle>
              <BookAuthor>Yuri Andrukhovych</BookAuthor>
            </BookItem>
            <BookItem>
              <BookCover src="/path/to/image2.png" alt="It doesn't hurt" />
              <BookTitle>It doesn't hurt</BookTitle>
              <BookAuthor>Kateryna Babkina</BookAuthor>
            </BookItem>
            {/* Add other book items similarly */}
          </BookList>
          <ArrowNavigation>
            <ArrowButton>◀</ArrowButton>
            <ArrowButton>▶</ArrowButton>
          </ArrowNavigation>
        </RecommendedSection>
      </BodySection>
    </Container>
  );
};

export default RecommendedDesk;
