//Recommended.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background-color: var(--black);
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const Logo = styled.img`
  width: 42px;
  height: 17px;
`;

export const UserMenu = styled.img`
  width: 24px;
  height: 24px;
`;

export const FilterSection = styled.div`
  position: relative;
  width: 335px;
  background-color: var(--lightblack);
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const FilterTitle = styled.p`
  font-family: 'Gilroy';
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  margin-bottom: 10px;
`;

export const FilterInput = styled.input`
  display: flex;
  align-items: center;
  width: 295px;
  height: 44px;
  background: #262626;
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 14px;
  font-size: 14px;
  color: var(--white);
  border: none;

  &::placeholder {
    color: var(--lightgray);
  }

  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.2);
    outline: none;
  }
`;

export const ApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 38px;
  background: transparent;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  color: #f9f9f9;
  font-size: 14px;
  cursor: pointer;
`;

export const WorkoutSection = styled.div`
  width: 295px;
  background: #262626;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const WorkoutTitle = styled.h2`
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 18px;
  color: #f9f9f9;
  margin-bottom: 20px;
`;

export const WorkoutStep = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--white);
  color: var(--black);
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StepDescription = styled.p`
  font-family: 'Gilroy';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #f9f9f9;
`;

export const LibraryLink = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Gilroy';
  font-weight: 500;
  font-size: 14px;
  color: #686868;
  text-decoration: underline;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  margin-left: 5px;
`;

export const RecommendedSection = styled.div`
  width: 335px;
`;

export const RecommendedTitle = styled.h3`
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 18px;
  color: #f9f9f9;
  margin-bottom: 10px;
`;

export const BooksContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;

export const BookCard = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
`;

export const BookTitle = styled.p`
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 14px;
  color: #f9f9f9;
  margin-top: 10px;
`;

export const BookAuthor = styled.p`
  font-family: 'Gilroy';
  font-weight: 500;
  font-size: 12px;
  color: #686868;
`;

export const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;

  div {
    width: 10px;
    height: 10px;
    background-color: #686868;
    border-radius: 50%;
    cursor: pointer;

    &:first-child {
      background-color: #f9f9f9;
    }
  }
`;
