//Reading.jsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  BookAuthor,
  BookTitle,
  BookBlock,
  BookCover,
  BookItem,
  RedBlock,
  ErrorMessage,
  Symbol,
  Symbol2,
  ChartWrapper,
  Chart,
  PietextBlock,
  PieBlock,
  Symblock,
  Smblock,
  Proc,
  Pages,
  Quoteoftheday,
  WorkoutStep1,
} from './Reading.styled';
import logoImage from '../../assets/svg/Logomobile.svg';
import logotablet from '../../assets/svg/Logotablet.svg';
import usermenu from '../../assets/svg/usermenu.svg';
import closeIcon from '../../assets/svg/x-close.svg';
import redcircule from '../../assets/svg/redsircule.svg';
import redsguare from '../../assets/svg/redsquare.svg';
import hourglass from '../../assets/svg/hourglass.svg';
import load100 from '../../assets/svg/load100.svg';
import load20 from '../../assets/svg/load20.svg';
import greendot from '../../assets/svg/green.svg';
import piechart from '../../assets/svg/piechart.svg';
import { AuthContext } from '../../context/AuthContext';
import { clearScreenSize } from '../../redux/screenSizeSlice';
import {
  setReadBook,
  setReadBookStatus,
  setReadBookError,
  selectReadBook,
  selectReadBookStatus,
} from '../../redux/readBookSlice';
import { updateUserBookStatus } from '../../redux/userBooksSlice';
import { fetchBookById } from '../../services/bookReadService';
import { startReadingBook } from '../../services/bookReadingService';
import { finishReadingBook } from '../../services/bookFinishService';
import readSchema from '../../schemas/readSchema';
import Notification from '../Notification/Notification';
import BookReadPopup from './BookReadPopup/BookReadPopup';

const Reading = () => {
  const { signout, user } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [condition, setCondition] = useState('inactive');
  const [notification, setNotification] = useState(null);
  const [finishPage, setFinishPage] = useState(0);
  const [procent, setProcent] = useState(0);
  const [isBookReadPopupVisible, setIsBookReadPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const bookId = state?.book?._id;
  const readBook = useSelector(selectReadBook);
  const readBookStatus = useSelector(selectReadBookStatus);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(readSchema),
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
      setNotification('Logout failed. Please try again.');
    }
  };

  const handleApply = async data => {
    try {
      const token = localStorage.getItem('token');
      if (bookId && token) {
        let response;
        if (condition === 'inactive') {
          response = await startReadingBook(bookId, data.page, token);
        } else {
          response = await finishReadingBook(bookId, data.page, token);
        }

        if (response.success) {
          dispatch(setReadBook(response.data));

          const lastProgress =
            response.data.progress[response.data.progress.length - 1];
          const newCondition =
            lastProgress?.status === 'active' ? 'active' : 'inactive';
          setCondition(newCondition);
          setNotification(
            condition === 'inactive'
              ? 'Reading started successfully'
              : 'Reading stopped successfully'
          );

          // Находим наибольшее значение finishPage среди всех записей progress
          const maxFinishPage = Math.max(
            0,
            ...response.data.progress
              .filter(p => p.finishPage !== undefined)
              .map(p => p.finishPage)
          );

          setFinishPage(maxFinishPage);

          const newProcent = (maxFinishPage / readBook.totalPages) * 100;
          setProcent(newProcent.toFixed(2));

          // Обновление статуса книги в Redux
          dispatch(
            updateUserBookStatus({
              bookId,
              status: newCondition === 'active' ? 'in-progress' : 'done',
            })
          );

          // Проверка, завершил ли пользователь чтение книги
          if (parseInt(data.page, 10) === readBook.totalPages) {
            setIsBookReadPopupVisible(true);
          }
        } else {
          setNotification(response.message);
        }
      }
    } catch (error) {
      setNotification('An error occurred. Please try again.');
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

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (bookId && token) {
      dispatch(setReadBookStatus('loading'));

      fetchBookById(bookId, token)
        .then(response => {
          if (response.success) {
            dispatch(setReadBook(response.data));

            const lastProgress =
              response.data.progress[response.data.progress.length - 1];
            const newCondition =
              lastProgress?.status === 'active' ? 'active' : 'inactive';
            setCondition(newCondition);

            const maxFinishPage = Math.max(
              0,
              ...response.data.progress
                .filter(p => p.finishPage !== undefined)
                .map(p => p.finishPage)
            );
            setFinishPage(maxFinishPage);
            const newProcent = (maxFinishPage / response.data.totalPages) * 100;
            setProcent(newProcent.toFixed(2));

            // Обновление статуса книги в Redux
            dispatch(
              updateUserBookStatus({
                bookId,
                status: newCondition === 'active' ? 'in-progress' : 'done',
              })
            );
          } else {
            dispatch(setReadBookError(response.message));
            setNotification(response.message);
          }
        })
        .catch(error => {
          dispatch(setReadBookError(error.message));
          setNotification(error.message);
        });
    }
  }, [bookId, dispatch]);

  if (!readBook) {
    return <p>Loading book...</p>;
  }

  return (
    <Container>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      {isBookReadPopupVisible && (
        <BookReadPopup onClose={() => setIsBookReadPopupVisible(false)} />
      )}
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
        <SidebarSection status={readBook.status}>
          <form onSubmit={handleSubmit(handleApply)}>
            <FiltersSection>
              <FilteText>
                {condition === 'active' ? 'Stop page' : 'Start page'}
              </FilteText>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="Page number:"
                  {...register('page')}
                />
              </InputWrapper>
              {errors.page && (
                <ErrorMessage>{errors.page.message}</ErrorMessage>
              )}
              <ApplyButton type="submit">
                {condition === 'active' ? 'To stop' : 'To start'}
              </ApplyButton>
            </FiltersSection>
          </form>
          <WorkoutSection>
            {(readBook.status === 'in-progress' ||
              readBook.status === 'done') && (
              <>
                <WorkoutTitle>
                  Statistics
                  <Symblock>
                    <Symbol src={hourglass} alt="hour glass" />
                    <Symbol src={piechart} alt="pie chart" />
                  </Symblock>
                </WorkoutTitle>
                <WorkoutStep1>
                  Each page, each chapter is a new round of knowledge, a new
                  step towards understanding. By rewriting statistics, we create
                  our own reading history.
                </WorkoutStep1>
                <PieBlock>
                  <ChartWrapper>
                    <Chart
                      src={procent > 99 ? load100 : load20}
                      alt={procent > 99 ? 'load 100%' : 'load 20%'}
                    />
                    <div className="centered-text">{`${procent}%`}</div>
                  </ChartWrapper>
                  <PietextBlock>
                    <Symbol2 src={greendot} alt="green dot" />
                    <Smblock>
                      <Proc>{procent}%</Proc>
                      <Pages>{finishPage} pages read</Pages>
                    </Smblock>
                  </PietextBlock>
                </PieBlock>
              </>
            )}

            {readBook.status === 'unread' && (
              <>
                <WorkoutTitle>Progress</WorkoutTitle>
                <WorkoutStep>
                  Here you will see when and how much you read. To record, click
                  on the red button above.
                </WorkoutStep>
                <Quoteoftheday className="emoji-books"></Quoteoftheday>
              </>
            )}
          </WorkoutSection>
        </SidebarSection>
        <RecommendedSection>
          <RecommendedBlock>
            <RecomText>My reading</RecomText>
          </RecommendedBlock>

          {readBookStatus === 'loading' && <p>Loading book...</p>}
          {readBookStatus === 'succeeded' && readBook && (
            <BookItem>
              <BookCover src={readBook.imageUrl} alt="book cover" />
              <BookBlock>
                <BookTitle>{readBook.title}</BookTitle>
                <BookAuthor>{readBook.author}</BookAuthor>
              </BookBlock>
              <RedBlock
                src={condition === 'active' ? redsguare : redcircule}
                alt={condition === 'active' ? 'red square' : 'red circle'}
              />
            </BookItem>
          )}
        </RecommendedSection>
      </BodySection>
    </Container>
  );
};

export default Reading;
