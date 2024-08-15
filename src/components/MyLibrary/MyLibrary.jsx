//MyLibrary.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from '../Loader/Loader';
import BookModalRead from './BookModalRead/BookModalRead';
import BookAddedPopup from './BookAddedPopup/BookAddedPopup';
import {
  addBookToUserLibrary,
  fetchUserBooks,
} from '../../services/bookAddService';
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
  ErrorMessage,
  TextBlock,
  DelBlock,
  FilterContainer,
  FilterButton,
  FilterDropdown,
  FilterOption,
} from './MyLibrary.styled';
import logoImage from '../../assets/svg/Logomobile.svg';
import logotablet from '../../assets/svg/Logotablet.svg';
import leftarrow from '../../assets/svg/login.svg';
import usermenu from '../../assets/svg/usermenu.svg';
import closeIcon from '../../assets/svg/x-close.svg';
import deleteIcon from '../../assets/svg/delete.svg';
import { AuthContext } from '../../context/AuthContext';
import { BookContext } from '../../context/BookContext';
import { clearScreenSize } from '../../redux/screenSizeSlice';
import Notification from '../Notification/Notification';
import {
  setUserBooks,
  deleteUserBook,
  selectUserBooks,
} from '../../redux/userBooksSlice';
import { selectBookLS } from '../../redux/bookLSSlice';
import bookSchema from '../../schemas/bookSchema';
import BookDeletePopup from './BookDeletePopup/BookDeletePopup';
import { deleteBookFromUserLibrary } from '../../services/bookDeleteService';
import chevronDown from '../../assets/svg/chevronDown.svg';
import chevronUp from '../../assets/svg/chevronUpp.svg';
import placeholderImage from '../../assets/images/tor.jpg';

const MyLibrary = () => {
  const { signout, user } = useContext(AuthContext);
  const { loading } = useContext(BookContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);
  const bookLS = useSelector(selectBookLS);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(userBooks);

  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All books');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

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
      dispatch({ type: 'bookLS/clearBookLS' });
      localStorage.clear();
      navigate('/login');
    } catch (error) {
      setNotification(
        error.response?.data?.message || 'Logout failed. Please try again.'
      );
    }
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const filterBooks = useCallback(
    filter => {
      if (filter === 'All books') {
        setFilteredBooks(userBooks);
      } else {
        const filtered = userBooks.filter(book => {
          if (filter === 'Unread') return book.status === 'unread';
          if (filter === 'In progress') return book.status === 'in-progress';
          if (filter === 'Done') return book.status === 'done';
          return true;
        });
        setFilteredBooks(filtered);
      }
    },
    [userBooks]
  );

  const selectFilterOption = option => {
    setSelectedFilter(option);
    setFilterVisible(false);
    filterBooks(option);
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
    setSelectedBook(book);
    setIsModalVisible(true);
  };

  const handleRecBookClick = book => {
    reset(book);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleAddBook = async data => {
    try {
      const result = await addBookToUserLibrary(data, user.token);
      if (result.success) {
        setIsPopupVisible(true);
        const booksResult = await fetchUserBooks(user.token);
        if (booksResult.success) {
          dispatch(setUserBooks(booksResult.data));
        }
      } else {
        setNotification(result.message);
      }
    } catch (error) {
      setNotification('An unexpected error occurred.');
    }
  };

  const handleDeleteClick = book => {
    setBookToDelete(book);
    setIsDeletePopupVisible(true);
  };

  const handleDeleteConfirm = async () => {
    setIsDeletePopupVisible(false);
    if (bookToDelete) {
      const result = await deleteBookFromUserLibrary(
        bookToDelete._id,
        user.token
      );
      if (result.success) {
        setNotification(result.data.message);

        dispatch(deleteUserBook(bookToDelete._id));
      } else {
        setNotification(result.message);
      }
    }
  };

  useEffect(() => {
    if (userBooks) {
      filterBooks(selectedFilter);
    }
  }, [userBooks, selectedFilter, filterBooks]);

  return (
    <Container>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      {isPopupVisible && (
        <BookAddedPopup onClose={() => setIsPopupVisible(false)} />
      )}
      {isDeletePopupVisible && (
        <BookDeletePopup
          book={bookToDelete}
          onClose={() => setIsDeletePopupVisible(false)}
          onDelete={handleDeleteConfirm}
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
            <form onSubmit={handleSubmit(handleAddBook)}>
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
              {loading && userBooks.length === 0 ? (
                <Loader />
              ) : (
                bookLS.slice(0, 3).map(book => (
                  <RecBookItem
                    key={book._id}
                    onClick={() => handleRecBookClick(book)}
                  >
                    {book.imageUrl ? (
                      <RecBookCover src={book.imageUrl} alt={book.title} />
                    ) : (
                      <RecBookCover
                        src={placeholderImage}
                        alt="Book cover is not available"
                      />
                    )}
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
            <FilterContainer>
              <FilterButton onClick={toggleFilter}>
                {selectedFilter}
                <img
                  src={filterVisible ? chevronUp : chevronDown}
                  alt={filterVisible ? 'chevron up' : 'chevron down'}
                />
              </FilterButton>
              {filterVisible && (
                <FilterDropdown>
                  <FilterOption onClick={() => selectFilterOption('Unread')}>
                    Unread
                  </FilterOption>
                  <FilterOption
                    onClick={() => selectFilterOption('In progress')}
                  >
                    In progress
                  </FilterOption>
                  <FilterOption onClick={() => selectFilterOption('Done')}>
                    Done
                  </FilterOption>
                  <FilterOption onClick={() => selectFilterOption('All books')}>
                    All books
                  </FilterOption>
                </FilterDropdown>
              )}
            </FilterContainer>
          </RecommendedBlock>
          {loading ? (
            <Loader />
          ) : filteredBooks.length === 0 ? (
            <EmptyMessageWrapper>
              <EmptyMessageIcon />
              <EmptyMessageText>
                To start training, add <span>some of your books</span> or from
                the recommended ones.
              </EmptyMessageText>
            </EmptyMessageWrapper>
          ) : (
            <BookList>
              {filteredBooks.map(book => (
                <BookItem key={book._id}>
                  {book.imageUrl ? (
                    <BookCover
                      onClick={() => handleBookClick(book)}
                      src={book.imageUrl}
                      alt={book.title}
                    />
                  ) : (
                    <BookCover
                      src={placeholderImage}
                      alt="Book cover is not available"
                    />
                  )}
                  <BookBlock>
                    <TextBlock>
                      <BookTitle>{book.title}</BookTitle>
                      <BookAuthor>{book.author}</BookAuthor>
                    </TextBlock>
                    <DelBlock
                      src={deleteIcon}
                      alt="red basket"
                      onClick={() => handleDeleteClick(book)}
                    />
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
