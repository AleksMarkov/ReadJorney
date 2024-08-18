//BookItem.styled.jsx
import styled from 'styled-components';

export const BookItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightblack);
  text-align: center;

  &:nth-child(n + 11) {
    display: none;
  }

  @media (max-width: 1440px) {
    &:nth-child(n + 9) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    &:nth-child(n + 3) {
      display: none;
    }
  }
`;

export const BookCover = styled.img`
  width: 137px;
  height: 208px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const BookBlock = styled.div`
  width: 137px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2px;

  @media (max-width: 1440px) {
    height: 32px;
  }

  @media (max-width: 768px) {
    height: 32px;
  }
`;

export const TextBlock = styled.div`
  width: 89px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  @media (max-width: 768px) {
    width: 95px;
  }
`;

export const BookTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--white);
  width: 87px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    width: 95px;
  }
`;

export const BookAuthor = styled.div`
  width: 87px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--lightgray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    width: 95px;
  }
`;

export const DelBlock = styled.img`
  width: 28px;
  height: 28px;
  color: #e85050;

  &:hover {
    cursor: pointer;
  }
`;
