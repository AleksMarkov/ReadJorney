//RecommendedDesk.jsx
import React, { useState, useEffect, useRef } from 'react';
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
  MyLibraryBlok,
  MyLibraryLink,
  Arrow,
  Quoteoftheday,
  RecommendedBlock,
  RecomText,
  ArrowNavigation,
  ArrowButton,
  UserMenu,
  PopupMenu,
  PopupMenuItem,
  CloseButton,
  Overlay,
  PopupMenuButton,
} from './RecommendedDesk.styled';
import logoImage from '../../assets/svg/Logomobile.svg';
import logotablet from '../../assets/svg/Logotablet.svg';
import leftarrow from '../../assets/svg/login.svg';
import chevronleft from '../../assets/svg/chevron-left.svg';
import chevronright from '../../assets/svg/chevron-right.svg';
import usermenu from '../../assets/svg/usermenu.svg';
import closeIcon from '../../assets/svg/x-close.svg';

const RecommendedDesk = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const popupRef = useRef(null);

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
          <UserName>Ilona Ratushniak</UserName>
          <LogoutButton>Log out</LogoutButton>
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
        {/* <PopupMenuItem>Home</PopupMenuItem>
        <PopupMenuItem>My library</PopupMenuItem> */}
        <PopupMenuButton>Log out</PopupMenuButton>
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
        </RecommendedSection>
      </BodySection>
    </Container>
  );
};

export default RecommendedDesk;
