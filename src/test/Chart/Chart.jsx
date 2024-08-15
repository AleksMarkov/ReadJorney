import React from 'react';
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
} from './Chart.styled';

const Chart = ({ data }) => {
  return (
    <ChartContainer>
      {data.map((entry, index) => (
        <ProgressSection key={index}>
          <DateContainer>
            <DateText>{entry.date}</DateText>
            <PagesText>{entry.pages} pages</PagesText>
          </DateContainer>
          <ProgressBar>
            <ProgressPercentage>{entry.percentage}%</ProgressPercentage>
            <TimeText>{entry.time}</TimeText>
            <SpeedText>{entry.speed} pages per hour</SpeedText>
          </ProgressBar>
          <DeleteIcon />
        </ProgressSection>
      ))}
    </ChartContainer>
  );
};

export default Chart;
