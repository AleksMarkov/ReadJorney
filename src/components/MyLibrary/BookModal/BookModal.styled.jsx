//BookModal.styled.jsx
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 483px;
  left: calc(50% - 500px / 2);
  top: calc(50% - 483px / 2);
  background: #1f1f1f;
  border: 1px solid rgba(104, 104, 104, 0.2);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 50px;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 335px;
    height: 421px;
    left: calc(50% - 335px / 2);
    top: calc(50% - 421px / 2);
    padding: 40px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 21px;
  right: 21px;
  width: 22px;
  height: 22px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    top: 21px;
    right: 21px;
  }
`;

export const BookImage = styled.img`
  width: 153px;
  height: 233px;
  margin: 0 auto;
  display: block;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 140px;
    height: 213px;
  }
`;

export const BookInfo = styled.div`
  text-align: center;
  margin-top: 16px;
`;

export const BookTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.02em;
  }
`;

export const BookAuthor = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--lightgray);
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.02em;
  }
`;

export const BookPages = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.02em;
  }
`;

export const AddButton = styled.button`
  display: block;
  margin: 32px auto 0;
  width: 162px;
  height: 46px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  background: none;
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.02em;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: rgba(249, 249, 249, 0.1);
  }

  @media (max-width: 768px) {
    margin: 20px auto 0;
    width: 141px;
    height: 42px;

    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.02em;
  }
`;
