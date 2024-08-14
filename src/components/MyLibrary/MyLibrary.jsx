//MyLibrary.jsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import BookModalRead from './BookModalRead/BookModalRead';
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
  NumberInput,
  ApplyButton,
  WorkoutSection,
  WorkoutTitle,
  MyLibraryBlok,
  MyLibraryLink,
  Arrow,
  RecBookList,
  RecBookItem,
  RecBookCover,
  RecBookTitle,
  RecBookAuthor,
  UserMenu,
  PopupMenu,
  CloseButton,
  Overlay,
  PopupMenuButton,
  RecBookBlock,
  RecommendedBlock,
  RecomText,
  BookList,
  BookItem,
  BookCover,
  BookBlock,
  BookTitle,
  BookAuthor,
  EmptyMessageWrapper,
  EmptyMessageIcon,
  EmptyMessageText,
} from './MyLibrary.styled';
import logoImage from '../../assets/svg/Logomobile.svg';
import logotablet from '../../assets/svg/Logotablet.svg';
import leftarrow from '../../assets/svg/login.svg';
import usermenu from '../../assets/svg/usermenu.svg';
import closeIcon from '../../assets/svg/x-close.svg';
import { AuthContext } from '../../context/AuthContext';
import { BookContext } from '../../context/BookContext';
import { clearScreenSize } from '../../redux/screenSizeSlice';
import Notification from '../Notification/Notification';
import { selectUserBooks } from '../../redux/userBooksSlice';
import { selectBookLS } from '../../redux/bookLSSlice';

const MyLibrary = () => {
  const { signout, user } = useContext(AuthContext);
  const { loading } = useContext(BookContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null); // Состояние для выбранной книги
  const [selectedRecBook, setSelectedRecBook] = useState(null); // Состояние для выбранной книги
  const [isModalVisible, setIsModalVisible] = useState(false); // Состояние для отображения модального окна
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);
  const bookLS = useSelector(selectBookLS);

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
      dispatch({ type: 'bookLS/clearBookLS' });

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

  const handleBookClick = book => {
    setSelectedBook(book); // Устанавливаем выбранную книгу
    setIsModalVisible(true); // Отображаем модальное окно
  };

  const handleRecBookClick = book => {
    setSelectedRecBook(book); // Устанавливаем выбранную книгу
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <HeaderSection>
        <MobLogo src={logotablet} mobilesrc={logoImage} alt="logo" />
        <MenuSection>
          <Link to="/recommended">
            <GetButton isActive={false}>Home</GetButton>
          </Link>
          <Link to="/library">
            <GetButton isActive={true}>My Library</GetButton>
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
            <GetButton isActive={true}>My Library</GetButton>
          </Link>
        </MenuSection>
        <PopupMenuButton onClick={handleLogout}>Log out</PopupMenuButton>
      </PopupMenu>
      <BodySection>
        <SidebarSection>
          <FiltersSection>
            <FilteText>{'Create your library:'}</FilteText>
            <InputWrapper>
              <NumberInput
                type="text"
                placeholder="Book title"
                value={selectedRecBook ? selectedRecBook.title : ''}
                readOnly
              />
            </InputWrapper>
            <InputWrapper>
              <NumberInput
                type="text"
                placeholder="The author"
                value={selectedRecBook ? selectedRecBook.author : ''}
                readOnly
              />
            </InputWrapper>
            <InputWrapper>
              <NumberInput
                type="text"
                placeholder="Number of pages"
                value={selectedRecBook ? selectedRecBook.totalPages : ''}
                readOnly
              />
            </InputWrapper>
            <ApplyButton>Add book</ApplyButton>
          </FiltersSection>
          <WorkoutSection>
            <WorkoutTitle>Recommended books</WorkoutTitle>
            <RecBookList>
              {loading && userBooks.length === 0 ? (
                <Loader />
              ) : (
                bookLS.slice(0, 3).map(book => (
                  <RecBookItem
                    key={book._id}
                    onClick={() => handleRecBookClick(book)}
                  >
                    <RecBookCover src={book.imageUrl} alt={book.title} />
                    <RecBookBlock>
                      <RecBookTitle>{book.title}</RecBookTitle>
                      <RecBookAuthor>{book.author}</RecBookAuthor>
                    </RecBookBlock>
                  </RecBookItem>
                ))
              )}
            </RecBookList>
            <MyLibraryBlok onClick={() => navigate('/recommended')}>
              <MyLibraryLink>Home</MyLibraryLink>
              <Arrow src={leftarrow} alt="left arrow" />
            </MyLibraryBlok>
          </WorkoutSection>
        </SidebarSection>
        <RecommendedSection>
          <RecommendedBlock>
            <RecomText>My library</RecomText>
          </RecommendedBlock>
          {loading ? (
            <Loader />
          ) : userBooks.length === 0 ? (
            <EmptyMessageWrapper>
              <EmptyMessageIcon />
              <EmptyMessageText>
                To start training, add some of your books or from the
                recommended ones.
              </EmptyMessageText>
            </EmptyMessageWrapper>
          ) : (
            <BookList>
              {userBooks.map(book => (
                <BookItem key={book._id} onClick={() => handleBookClick(book)}>
                  <BookCover src={book.imageUrl} alt={book.title} />
                  <BookBlock>
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.author}</BookAuthor>
                  </BookBlock>
                </BookItem>
              ))}
            </BookList>
          )}
        </RecommendedSection>
      </BodySection>

      {isModalVisible && (
        <BookModalRead book={selectedBook} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default MyLibrary;
