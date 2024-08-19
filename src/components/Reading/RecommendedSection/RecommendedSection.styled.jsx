//RecommendedSection.styled.jsx
import styled from 'styled-components';

export const StyledRecommendedSection = styled.div`
  width: 847px;
  height: 651px;
  background-color: var(--lightblack);
  border-radius: 30px;
  padding: 40px 40px 27px 40px;

  @media (max-width: 1440px) {
    width: 704px;
    height: 518px;
    padding: 40px 40px 25px 40px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 471px;
    padding: 40px 20px;
  }
`;

export const RecommendedBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 44px;

  @media (max-width: 1440px) {
    width: 624px;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    width: 295px;
    height: 20px;
    margin-bottom: 40px;
  }
`;

export const RecomText = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-align: left;
  color: var(--white);

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const RecomTime = styled.div`
  width: 168px;
  height: 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: right;
  color: #686868;

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    height: 16px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightblack);
  text-align: center;
`;

export const BookCover = styled.img`
  width: 224px;
  height: 340px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 25px;

  @media (max-width: 1440px) {
    width: 169px;
    height: 256px;
  }

  @media (max-width: 768px) {
    width: 137px;
    height: 208px;
    margin-bottom: 10px;
  }
`;

export const BookBlock = styled.div`
  width: 847px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media (max-width: 1440px) {
    width: 600px;
    height: 42px;
  }

  @media (max-width: 768px) {
    height: 53px;
  }
`;

export const BookTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  width: 700px;
  text-align: center;
  color: var(--white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1440px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    width: 200px;
    white-space: wrap;
  }
`;

export const BookAuthor = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  width: 700px;
  text-align: center;
  color: var(--lightgray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1440px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
    width: 200px;
    white-space: wrap;
  }
`;

export const RedBlock = styled.img`
  margin-top: 30px;
  width: 50px;
  height: 50px;
  color: #e90516;

  @media (max-width: 1440px) {
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 40px;
    height: 40px;
  }

  &:hover {
    cursor: pointer;
  }
`;
