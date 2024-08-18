//QuoteOfTheDay.styled.jsx
import styled from 'styled-components';

export const QuoteContainer = styled.div`
  width: 313px;
  height: 83px;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--darkgray);

  &.emoji-books::before {
    content: '📚';
    font-size: 40px;
    line-height: 40px;
    display: inline-block;
  }

  p {
    width: 219px;
    height: 54px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    color: var(--lightgray);
  }

  span {
    color: var(--white);
  }

  @media (max-width: 1440px) {
    display: none;
  }
`;
