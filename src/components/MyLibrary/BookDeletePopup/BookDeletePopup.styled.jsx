//BookDeletePopup.styled.jsx
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
  height: 340px;
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
  padding: 30px;

  @media (max-width: 768px) {
    width: 335px;
    height: 310px;
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
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  color: #f9f9f9;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const PopupMessage = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
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

export const PopupDeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ff7875;
  }
`;
