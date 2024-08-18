//RecBookItem.styled.jsx
import styled from 'styled-components';

export const RecBookItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightblack);
  text-align: center;
`;

export const RecBookCover = styled.img`
  width: 71px;
  height: 107px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const RecBookBlock = styled.div`
  width: 71px;
  height: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  @media (max-width: 1440px) {
    height: 31px;
  }
  @media (max-width: 768px) {
    height: 26px;
  }
`;

export const RecBookTitle = styled.div`
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--white);
  width: 71px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
  }
`;

export const RecBookAuthor = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--lightgray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
