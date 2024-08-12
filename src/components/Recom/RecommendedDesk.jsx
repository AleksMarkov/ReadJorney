//RecommendedDesk.jsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  WorkoutSection,
  WorkoutTitle,
  WorkoutStep,
  WorkoutIcon,
  WorkoutDescription,
  MyLibraryBlok,
  MyLibraryLink,
  Arrow,
  Quoteoftheday,
  RecommendedBlock,
  RecomText,
  ArrowNavigation,
  ArrowButton,
  BookList,
  BookItem,
  BookCover,
  BookTitle,
  BookAuthor,
  UserMenu,
  PopupMenu,
  CloseButton,
  Overlay,
  PopupMenuButton,
  BookBlock,
} from './RecommendedDesk.styled';
import logoImage from '../../assets/svg/Logomobile.svg';
import logotablet from '../../assets/svg/Logotablet.svg';
import leftarrow from '../../assets/svg/login.svg';
import chevronleft from '../../assets/svg/chevron-left.svg';
import chevronright from '../../assets/svg/chevron-right.svg';
import usermenu from '../../assets/svg/usermenu.svg';
import closeIcon from '../../assets/svg/x-close.svg';

import { AuthContext } from '../../context/AuthContext';
import { BookContext } from '../../context/BookContext';
import { clearScreenSize } from '../../redux/screenSizeSlice';
import Notification from '../Notification/Notification';

const RecommendedDesk = () => {
  const { signout, user } = useContext(AuthContext);
  const { recommendedBooks, loading } = useContext(BookContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleClickOutside = event => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setIsMenuVisible(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signout();
      dispatch(clearScreenSize());
      localStorage.clear();
      navigate('/login');
    } catch (error) {
      setNotification(
        error.response?.data?.message || 'Logout failed. Please try again.'
      );
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <HeaderSection>
        <MobLogo src={logotablet} mobileSrc={logoImage} alt="logo" />
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
          <UserName>{user?.name || 'User'}</UserName>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
          <UserMenu
            src={usermenu}
            alt="user menu"
            onClick={toggleMenuVisibility}
          />
        </UserSection>
      </HeaderSection>
      <Overlay isVisible={isMenuVisible} onClick={toggleMenuVisibility} />
      <PopupMenu ref={popupRef} isVisible={isMenuVisible}>
        <CloseButton onClick={toggleMenuVisibility}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>
        <MenuSection>
          <Link to="#home">
            <GetButton>Home</GetButton>
          </Link>
          <Link to="#my-library">
            <GetButton>My Library</GetButton>
          </Link>
        </MenuSection>
        <PopupMenuButton onClick={handleLogout}>Log out</PopupMenuButton>
      </PopupMenu>
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
                Create a personal library:{' '}
                <span>add the books you intend to read to it.</span>
              </WorkoutDescription>
            </WorkoutStep>
            <WorkoutStep>
              <WorkoutIcon>2</WorkoutIcon>
              <WorkoutDescription>
                Create your first workout:{' '}
                <span>define a goal, choose a period, start training.</span>
              </WorkoutDescription>
            </WorkoutStep>
            <MyLibraryBlok>
              <MyLibraryLink>My library</MyLibraryLink>
              <Arrow src={leftarrow} alt="left arrow" />
            </MyLibraryBlok>
          </WorkoutSection>
          <Quoteoftheday className="emoji-books">
            <p>
              "Books are <span>windows</span> to the world, and reading is a
              journey into the unknown."
            </p>
          </Quoteoftheday>
        </SidebarSection>
        <RecommendedSection>
          <RecommendedBlock>
            <RecomText>Recommended</RecomText>
            <ArrowNavigation>
              <ArrowButton>
                <img src={chevronleft} alt="Previous" />
              </ArrowButton>
              <ArrowButton>
                <img src={chevronright} alt="Next" />
              </ArrowButton>
            </ArrowNavigation>
          </RecommendedBlock>
          <BookList>
            {loading ? (
              <p>Loading...</p>
            ) : (
              recommendedBooks.map(book => (
                <BookItem key={book._id}>
                  <BookCover src={book.imageUrl} alt={book.title} />
                  <BookBlock>
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.author}</BookAuthor>
                  </BookBlock>
                </BookItem>
              ))
            )}
          </BookList>
        </RecommendedSection>
      </BodySection>
    </Container>
  );
};

export default RecommendedDesk;
