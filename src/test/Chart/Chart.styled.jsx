//Chart.styled.jsx
import styled from 'styled-components';
import deleteIcon from '../../assets/svg/delete.svg';

export const ChartContainer = styled.div`
  width: 313px;
  height: 373px;
  background-color: #262626;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
`;

export const ProgressSection = styled.div`
  margin-bottom: 20px;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const DateText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

export const PagesText = styled.span`
  font-size: 14px;
  color: #b3b3b3;
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressPercentage = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 10px;
`;

export const TimeText = styled.span`
  font-size: 14px;
  color: #b3b3b3;
  margin-right: 10px;
`;

export const SpeedText = styled.span`
  font-size: 14px;
  color: #00ff00;
  margin-right: 10px;
`;

export const DeleteIcon = styled.img.attrs({
  src: deleteIcon,
  alt: 'Delete',
})`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
