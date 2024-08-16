//Chart.styled.jsx
import styled from 'styled-components';
import deleteIcon from '../../../assets/svg/trash-2.svg';
import whiteblock from '../../../assets/svg/whiteblock.svg';
import rectangle from '../../../assets/svg/Rectangle.svg';

export const ChartContainer = styled.div`
  width: 313px;
  height: 373px;
  background-color: #262626;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 1440px) {
    width: 321px;
    height: 252px;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 211px;
  }
`;

export const ProgressSection = styled.div`
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WhiteBlock = styled.img.attrs({
  src: whiteblock,
  alt: 'white block',
})`
  width: 20px;
  height: 20px;
`;
export const InfoBlock = styled.div`
  width: 243px;
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const DateText = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #f9f9f9;
`;

export const PagesText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #686868;
  margin-right: 22px;
`;

export const ProgressBar = styled.div`
  width: 243px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const ProgressPercentage = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  margin-right: 110px;
`;

export const TimeBlock = styled.div`
  width: 243px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TimeText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: #686868;
  margin-right: 10px;
`;

export const SpeedText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: #686868;
  align-text: right;
  margin-right: 22px;
`;

export const RectangleIcon = styled.img.attrs({
  src: rectangle,
  alt: 'Rectangle',
})`
  width: 59px;
  height: 24px;
`;

export const DeleteIcon = styled.img.attrs({
  src: deleteIcon,
  alt: 'Delete',
})`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;
