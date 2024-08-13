//RecommendedDesk.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
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
import BookModal from './BookModal/BookModal';
import { AuthContext } from '../../context/AuthContext';
import { BookContext } from '../../context/BookContext';
import { clearScreenSize } from '../../redux/screenSizeSlice';
import Notification from '../Notification/Notification';
import { selectBookLS } from '../../redux/bookLSSlice';
import { useScreenSize } from '../../hooks/useScreenSize';

const RecommendedDesk = () => {
  const { signout, user } = useContext(AuthContext);
  const { loading } = useContext(BookContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookLS = useSelector(selectBookLS);
  const screenSize = useScreenSize();

  // Filter input states
  const [filterTitle, setFilterTitle] = useState('');
  const [filterAuthor, setFilterAuthor] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(bookLS);

  // Memoize getDisplayCount to avoid re-creating it on every render
  const getDisplayCount = useCallback(() => {
    if (screenSize >= 320 && screenSize <= 767) {
      return 2;
    } else if (screenSize >= 768 && screenSize <= 1439) {
      return 8;
    } else if (screenSize >= 1440) {
      return 10;
    }
    return 10;
  }, [screenSize]);

  useEffect(() => {
    setVisibleStart(0);
    setVisibleEnd(getDisplayCount());
  }, [getDisplayCount]);

  useEffect(() => {
    // Update filteredBooks when bookLS or filters change
    const filtered = bookLS.filter(book => {
      return (
        (filterTitle === '' ||
          book.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
        (filterAuthor === '' ||
          book.author.toLowerCase().includes(filterAuthor.toLowerCase()))
      );
    });
    setFilteredBooks(filtered);
  }, [bookLS, filterTitle, filterAuthor]);

  const handleApplyFilters = () => {
    setVisibleStart(0);
    setVisibleEnd(getDisplayCount());
  };

  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleEnd, setVisibleEnd] = useState(getDisplayCount());

  const handleNext = () => {
    const displayCount = getDisplayCount();
    const newStart = visibleStart + displayCount;
    const newEnd = visibleEnd + displayCount;

    if (newEnd <= filteredBooks.length) {
      setVisibleStart(newStart);
      setVisibleEnd(newEnd);
    } else if (newEnd > filteredBooks.length) {
      setVisibleStart(newStart);
      setVisibleEnd(filteredBooks.length);
    }
  };

  const handlePrevious = () => {
    const displayCount = getDisplayCount();
    const newStart = visibleStart - displayCount;
    const newEnd = visibleEnd - displayCount;

    if (newStart >= 0) {
      setVisibleStart(newStart);
      setVisibleEnd(newEnd);
    } else if (newStart < 0) {
      setVisibleStart(0);
      setVisibleEnd(getDisplayCount());
    }
  };

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

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = book => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  // Важно! Проверяем, что пользователь существует перед рендерингом элементов
  if (!user) {
    return null; // Если пользователь не существует, ничего не рендерим
  }

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
          <Link to="#home">
            <GetButton>Home</GetButton>
          </Link>
          <Link to="#my-library">
            <GetButton>My Library</GetButton>
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
              <Input
                type="text"
                placeholder="Book title"
                value={filterTitle}
                onChange={e => setFilterTitle(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="text"
                placeholder="The author"
                value={filterAuthor}
                onChange={e => setFilterAuthor(e.target.value)}
              />
            </InputWrapper>
            <ApplyButton onClick={handleApplyFilters}>To apply</ApplyButton>
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
              <ArrowButton
                onClick={handlePrevious}
                disabled={visibleStart === 0}
                style={{ opacity: visibleStart === 0 ? 0.2 : 1 }}
              >
                <img src={chevronleft} alt="Previous" />
              </ArrowButton>
              <ArrowButton
                onClick={handleNext}
                disabled={visibleEnd >= filteredBooks.length || loading}
                style={{
                  opacity:
                    visibleEnd >= filteredBooks.length || loading ? 0.2 : 1,
                }}
              >
                <img src={chevronright} alt="Next" />
              </ArrowButton>
            </ArrowNavigation>
          </RecommendedBlock>
          <BookList>
            {loading && filteredBooks.length === 0 ? (
              <Loader />
            ) : (
              filteredBooks.slice(visibleStart, visibleEnd).map(book => (
                <BookItem key={book._id} onClick={() => handleBookClick(book)}>
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

      {selectedBook && <BookModal book={selectedBook} onClose={closeModal} />}
    </Container>
  );
};

export default RecommendedDesk;
