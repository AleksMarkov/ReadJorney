//SidebarSection.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createReadSchema from '../../../schemas/readSchema';
import { startReadingBook } from '../../../services/bookReadingService';
import { finishReadingBook } from '../../../services/bookFinishService';
import {
  setReadBook,
  setProgress,
  selectProgress,
} from '../../../redux/readBookSlice';
import { updateUserBookStatus } from '../../../redux/userBooksSlice';
import Chart from '../../../components/Reading/Chart/Chart';
import {
  StyledSidebarSection,
  FiltersSection,
  WorkoutSection,
  FilteText,
  InputWrapper,
  Input,
  ApplyButton,
  WorkoutTitle,
  WorkoutStep,
  ErrorMessage,
  Symbol,
  Symbol2,
  ChartWrapper,
  PieChart,
  PietextBlock,
  PieBlock,
  Symblock,
  Smblock,
  Proc,
  Pages,
  Quoteoftheday,
  WorkoutStep1,
} from './SidebarSection.styled';
import hourglass from '../../../assets/svg/hourglass.svg';
import load100 from '../../../assets/svg/load100.svg';
import load20 from '../../../assets/svg/load20.svg';
import greendot from '../../../assets/svg/green.svg';
import piechart from '../../../assets/svg/piechart.svg';

const SidebarSection = ({
  readBook,
  setNotification,
  setIsBookReadPopupVisible,
  setCondition,
  condition,
  setShowTimeLeft,
}) => {
  const [finishPage, setFinishPage] = useState(0);
  const [procent, setProcent] = useState(0);
  const progress = useSelector(selectProgress);
  const [view, setView] = useState('statistics');
  const dispatch = useDispatch();
  const { state } = useLocation();
  const bookId = state?.book?._id;
  const schema = createReadSchema(readBook?.totalPages || 1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleApply = async data => {
    handleViewChange('statistics');
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

          const maxFinishPage = Math.max(
            0,
            ...response.data.progress
              .filter(p => p.finishPage !== undefined)
              .map(p => p.finishPage)
          );
          setFinishPage(maxFinishPage);
          const newProcent = (maxFinishPage / readBook.totalPages) * 100;
          setProcent(newProcent.toFixed(2));
          dispatch(
            updateUserBookStatus({
              bookId,
              status: newCondition === 'active' ? 'in-progress' : 'done',
            })
          );

          if (parseInt(data.page, 10) === readBook.totalPages) {
            setIsBookReadPopupVisible(true);
          }
          setShowTimeLeft(true);
        } else {
          setNotification(response.message);
        }
      }
    } catch (error) {
      setNotification('An error occurred. Please try again.');
    }
  };

  const handleViewChange = async newView => {
    setView(newView);

    if (newView === 'diary') {
      if (!readBook || !readBook.progress) {
        await new Promise(resolve => {
          const checkDataLoaded = setInterval(() => {
            if (readBook && readBook.progress) {
              clearInterval(checkDataLoaded);
              resolve();
            }
          }, 100);
        });
      }

      if (readBook.status === 'unread') {
        return;
      }

      const progressData = readBook.progress
        .filter(p => p.status === 'inactive')
        .map(p => ({
          ...p,
          pages: p.finishPage - p.startPage + 1,
          date: p.finishReading.split('T')[0],
          time: Math.round(
            (new Date(p.finishReading) - new Date(p.startReading)) / 60000
          ),
          percentage:
            ((p.finishPage - p.startPage) / readBook.totalPages) * 100,
          speed: (
            (p.finishPage - p.startPage) /
            ((new Date(p.finishReading) - new Date(p.startReading)) / 3600000)
          ).toFixed(2),
        }));

      progressData.forEach(p => {
        p.percentage = parseFloat(p.percentage.toFixed(1));
      });

      dispatch(setProgress(progressData));
    }
  };

  return (
    <StyledSidebarSection status={readBook.status}>
      <form onSubmit={handleSubmit(handleApply)}>
        <FiltersSection>
          {' '}
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
          {errors.page && <ErrorMessage>{errors.page.message}</ErrorMessage>}
          <ApplyButton type="submit">
            {condition === 'active' ? 'To stop' : 'To start'}
          </ApplyButton>
        </FiltersSection>
      </form>
      <WorkoutSection>
        {(readBook.status === 'in-progress' || readBook.status === 'done') && (
          <>
            <WorkoutTitle>
              {view === 'statistics' ? 'Statistics' : 'Diary'}
              <Symblock>
                <Symbol
                  src={hourglass}
                  alt="hour glass"
                  style={{
                    color: view === 'diary' ? '#141414' : '#686868',
                  }}
                  onClick={() => handleViewChange('diary')}
                />
                <Symbol
                  src={piechart}
                  alt="pie chart"
                  style={{
                    color: view === 'statistics' ? '#141414' : '#686868',
                  }}
                  onClick={() => handleViewChange('statistics')}
                />
              </Symblock>
            </WorkoutTitle>
            {view === 'statistics' ? (
              <>
                <WorkoutStep1>
                  Each page, each chapter is a new round of knowledge, a new
                  step towards understanding. By rewriting statistics, we create
                  our own reading history.
                </WorkoutStep1>
                <PieBlock>
                  <ChartWrapper>
                    <PieChart
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
            ) : (
              <Chart data={progress} />
            )}
          </>
        )}
        {readBook.status === 'unread' && (
          <>
            <WorkoutTitle>Progress</WorkoutTitle>
            <WorkoutStep>
              Here you will see when and how much you read. To record, click on
              the red button above.
            </WorkoutStep>
            <Quoteoftheday className="emoji-books"></Quoteoftheday>
          </>
        )}
      </WorkoutSection>
    </StyledSidebarSection>
  );
};

export default SidebarSection;
