//Reading.jsx
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
  RecommendedBlock,
  RecomText,
  UserMenu,
  PopupMenu,
  CloseButton,
  Overlay,
  PopupMenuButton,
} from './Reading.styled';
import logoImage from '../../assets/svg/Logomobile.svg';
import logotablet from '../../assets/svg/Logotablet.svg';
import usermenu from '../../assets/svg/usermenu.svg';
import closeIcon from '../../assets/svg/x-close.svg';
import { AuthContext } from '../../context/AuthContext';
import { clearScreenSize } from '../../redux/screenSizeSlice';

const Reading = () => {
  const { signout, user } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(null);

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
      // Clear Redux slices
      dispatch(clearScreenSize());
      dispatch({ type: 'bookLS/clearBookLS' }); // Assuming you have an action to clear the bookLS slice
      // Clear Local Storage
      localStorage.clear();
      // Navigate to login page
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
      <HeaderSection>
        <MobLogo src={logotablet} mobilesrc={logoImage} alt="logo" />
        <MenuSection>
          <Link to="/recommended">
            <GetButton isActive={false}>Home</GetButton>
          </Link>
          <Link to="/library">
            <GetButton isActive={false}>My Library</GetButton>
          </Link>
        </MenuSection>
        <UserSection>
          <UserIcon>
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </UserIcon>
          <UserName>{user?.name || 'User'}</UserName>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
          <UserMenu
            src={usermenu}
            alt="user menu"
            onClick={toggleMenuVisibility}
          />
        </UserSection>
      </HeaderSection>
      <Overlay
        isvisible={isMenuVisible.toString()}
        onClick={toggleMenuVisibility}
      />
      <PopupMenu ref={popupRef} isvisible={isMenuVisible.toString()}>
        <CloseButton onClick={toggleMenuVisibility}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>
        <MenuSection>
          <Link to="/recommended">
            <GetButton isActive={false}>Home</GetButton>
          </Link>
          <Link to="/library">
            <GetButton isActive={false}>My Library</GetButton>
          </Link>
        </MenuSection>
        <PopupMenuButton onClick={handleLogout}>Log out</PopupMenuButton>
      </PopupMenu>
      <BodySection>
        <SidebarSection>
          <FiltersSection>
            <FilteText>Filters:</FilteText>
            <InputWrapper>
              <Input />
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
            <WorkoutStep></WorkoutStep>
          </WorkoutSection>
        </SidebarSection>
        <RecommendedSection>
          <RecommendedBlock>
            <RecomText>Recommended</RecomText>
          </RecommendedBlock>
          {/* <BookItem key={book._id} onClick={() => handleBookClick(book)}>
                  <BookCover src={book.imageUrl} alt={book.title} />
                  <BookBlock>
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.author}</BookAuthor>
                  </BookBlock>
                </BookItem> */}
        </RecommendedSection>
      </BodySection>
    </Container>
  );
};

export default Reading;
