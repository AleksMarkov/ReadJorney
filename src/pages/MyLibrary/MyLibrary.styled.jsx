//MyLibrary.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  height: 800px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px;
  gap: 16px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1440px) {
    width: 768px;
    height: 1169px;
  }
  @media (max-width: 768px) {
    width: 375px;
    height: 983px;
    padding: 20px;
    gap: 10px;
  }
`;

export const BodySection = styled.div`
  width: 1216px;
  height: 700px;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 1440px) {
    width: 704px;
    height: 1015px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 876px;
    flex-direction: column;
    gap: 10px;
  }
`;
