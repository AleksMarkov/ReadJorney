//SidebarSection.styled.jsx
import styled from 'styled-components';

export const StyledSidebarSection = styled.div`
  width: 353px;
  height: 651px;
  background-color: var(--lightblack);
  border-radius: 30px;
  padding: 20px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  @media (max-width: 1440px) {
    width: 704px;
    height: 336px;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 16px 16px 32px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 335px;
    height: ${({ status }) =>
      status === 'in-progress' || status === 'done' ? '451px' : '390px'};
    padding: 20px;
    gap: 40px;
  }
`;

export const FiltersSection = styled.div`
  width: 313px;
  height: 158px;
  background-color: var(--lightblack);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 8px;

  @media (max-width: 1440px) {
    width: 295px;
    height: 244px;
  }

  @media (max-width: 768px) {
    width: 295px;
    height: 124px;
  }
`;

export const FilteText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--white);
  margin-left: 14px;
  margin-top: 20px;

  @media (max-width: 1440px) {
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    margin-top: 0px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 313px;
  height: 50px;
  padding: 16px;
  gap: 8px;
  border-radius: 12px;
  background-color: var(--darkgray);
  color: var(--white);
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;

  &::placeholder {
    color: var(--lightgray);
  }

  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.1);
    outline: none;
  }

  @media (max-width: 1440px) {
    width: 295px;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 44px;
    padding: 14px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.02em;
  }
`;

export const ApplyButton = styled.button`
  padding: 20px;
  width: 122px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  background-color: var(--darkgray);
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    color: var(--lightblack);
    background-color: var(--white);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 38px;
    padding: 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
  }
`;

export const WorkoutSection = styled.div`
  width: 313px;
  height: 493px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1440px) {
    width: 321px;
    height: 272px;
    padding: 0px;
    align-items: flex-start;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 2250px;
    gap: 14px;
  }
`;

export const WorkoutTitle = styled.h3`
  width: 293px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: left;
  margin-bottom: 14px;

  @media (max-width: 1440px) {
    align-items: flex-start;
    width: 305px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    width: 295px;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.02em;
    margin-bottom: 0px;
  }
`;

export const WorkoutStep = styled.div`
  width: 293px;
  height: 72px;
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: #686868;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: left;

  @media (max-width: 1440px) {
    width: 305px;
  }

  @media (max-width: 768px) {
    width: 295px;
  }
`;

export const WorkoutStep1 = styled.div`
  width: 293px;
  height: 72px;
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: #686868;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: left;

  @media (max-width: 1440px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: 295px;
  }
`;

export const Quoteoftheday = styled.div`
  margin-top: 24px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--darkgray);

  &.emoji-books::before {
    content: '🌟';
    font-size: 50px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1440px) {
    margin-top: 14px;
  }

  @media (max-width: 768px) {
    margin-top: -22px;
    width: 80px;
    height: 80px;
    &.emoji-books::before {
      font-size: 32px;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: #e90516;
  text-align: left;
  margin-left: 14px;
  margin-top: 4px;
`;

export const Symbol = styled.img`
  width: 20px;
  height: 20px;
  color: var(--white);

  &:hover {
    cursor: pointer;
  }
`;

export const PieBlock = styled.div`
  width: 313px;
  height: 281px;
  border-radius: 12px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-top: 20px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    width: 321px;
    height: 252px;
  }

  @media (max-width: 768px) {
    width: 295px;
    height: 211px;
  }
`;

export const PieChart = styled.img`
  width: 189px;
  height: 189px;
  color: #1f1f1f;
  background-color: #262626;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    width: 136px;
    height: 136px;
  }

  @media (max-width: 768px) {
    width: 116px;
    height: 116px;
  }
`;

export const ChartWrapper = styled.div`
  position: relative;
  width: 189px;
  height: 189px;

  .centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  @media (max-width: 1440px) {
    width: 138px;
    height: 138px;
  }

  @media (max-width: 768px) {
    width: 116px;
    height: 116px;
  }
`;

export const PietextBlock = styled.div`
  width: 108px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

export const Smblock = styled.div`
  width: 79px;
  height: 42px;

  &:hover {
    cursor: pointer;
  }
`;

export const Proc = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #f9f9f9;

  &:hover {
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #686868;

  &:hover {
    cursor: pointer;
  }
`;

export const Symbol2 = styled.img`
  width: 14px;
  height: 14px;
  color: var(--white);

  &:hover {
    cursor: pointer;
  }
`;

export const Symblock = styled.div`
  width: 48px;
  height: 20px;
  color: var(--white);
  dilsplay: flex;
  justify-content: space-between;
  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
  }

  &:hover {
    cursor: pointer;
  }
`;
