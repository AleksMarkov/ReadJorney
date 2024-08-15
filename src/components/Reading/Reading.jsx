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
  RecommendedBlock,
  RecomText,
  UserMenu,
  PopupMenu,
  CloseButton,
  Overlay,
  PopupMenuButton,
  Quoteoftheday,
  BookAuthor,
  BookTitle,
  BookBlock,
  BookCover,
  BookItem,
  RedBlock,
} from './Reading.styled';
import logoImage from '../../assets/svg/Logomobile.svg';
import logotablet from '../../assets/svg/Logotablet.svg';
import usermenu from '../../assets/svg/usermenu.svg';
import closeIcon from '../../assets/svg/x-close.svg';
import { AuthContext } from '../../context/AuthContext';
import { clearScreenSize } from '../../redux/screenSizeSlice';
import iphone from '../../assets/images/iPhone.jpg';
import redcircule from '../../assets/svg/redsircule.svg';

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
            <FilteText>Start page</FilteText>
            <InputWrapper>
              <Input type="text" placeholder="Page number:" value="" />
            </InputWrapper>
            <ApplyButton>To start</ApplyButton>
          </FiltersSection>
          <WorkoutSection>
            <WorkoutTitle>Progress</WorkoutTitle>
            <WorkoutStep>
              Here you will see when and how much you read. To record, click on
              the red button above.
            </WorkoutStep>
            <Quoteoftheday className="emoji-books"></Quoteoftheday>
          </WorkoutSection>
        </SidebarSection>
        <RecommendedSection>
          <RecommendedBlock>
            <RecomText>My reading</RecomText>
          </RecommendedBlock>

          <BookItem>
            <BookCover src={iphone} alt="book cover" />
            <BookBlock>
              <BookTitle>test</BookTitle>
              <BookAuthor>test</BookAuthor>
            </BookBlock>
            <RedBlock src={redcircule} alt="red circule" />
          </BookItem>
        </RecommendedSection>
      </BodySection>
    </Container>
  );
};

export default Reading;
