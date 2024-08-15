//BookReadPopup.styled.jsx
import styled from 'styled-components';

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const PopupContainer = styled.div`
  position: absolute;
  width: 342px;
  height: 308px;
  left: calc(50% - 342px / 2);
  top: 280px;
  background: #1f1f1f;
  border: 1px solid rgba(104, 104, 104, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 335px;
    height: 290px;
  }
`;

export const PopupCloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    right: 12px;
  }
`;

export const PopupThumbsUpIcon = styled.div`
  font-size: 68px;
  line-height: 70px;
  color: #000000;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 60px;
    line-height: 50px;
    font-size: 50px;
  }
`;

export const PopupTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const PopupTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  color: #f9f9f9;

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
  }
`;

export const PopupMessage = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #686868;
  width: 242px;

  span {
    color: #f9f9f9;
  }

  @media (max-width: 768px) {
    letter-spacing: -0.02em;
  }
`;
