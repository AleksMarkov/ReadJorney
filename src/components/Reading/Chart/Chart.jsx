import React from 'react';
import { useSelector } from 'react-redux';
import { selectProgress } from '../../../redux/readBookSlice';
import {
  ChartContainer,
  DateContainer,
  DateText,
  PagesText,
  ProgressSection,
  ProgressPercentage,
  TimeText,
  SpeedText,
  ProgressBar,
  DeleteIcon,
  CardContainer,
  WhiteBlock,
  InfoBlock,
  RectangleIcon,
  TimeBlock,
} from './Chart.styled';

const Chart = () => {
  const data = useSelector(selectProgress);

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <ChartContainer>
      {data.map((entry, index) => (
        <ProgressSection key={index}>
          <CardContainer>
            <WhiteBlock />
            <InfoBlock>
              <DateContainer>
                <DateText>{formatDate(entry.date)}</DateText>
                <PagesText>{entry.pages} pages</PagesText>
              </DateContainer>
              <ProgressBar>
                <ProgressPercentage>{entry.percentage}%</ProgressPercentage>
                <RectangleIcon />
                <DeleteIcon />
              </ProgressBar>
              <TimeBlock>
                <TimeText>{entry.time} minutes</TimeText>
                <SpeedText>
                  {entry.speed} pages
                  <br />
                  per hour
                </SpeedText>
              </TimeBlock>
            </InfoBlock>
          </CardContainer>
        </ProgressSection>
      ))}
    </ChartContainer>
  );
};

export default Chart;
