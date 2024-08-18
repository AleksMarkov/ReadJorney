//LoginForm.styled.jsx
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  width: 472px;
  margin-bottom: 140px;

  @media (max-width: 1440px) {
    width: 472px;
    gap: 14px;
    margin-bottom: 146px;
  }

  @media (max-width: 768px) {
    width: 295px;
    gap: 8px;
    margin-bottom: 72px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background-color: var(--darkgray);
  border-radius: 12px;
  padding: 14px;
  color: var(--white);
  border: none;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;
  height: 44px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  padding: 14px 50px 14px 14px;
  text-align: left;

  &::placeholder {
    color: var(--lightgray);
  }

  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.1);
    outline: none;
  }

  @media (max-width: 1440px) {
    height: 50px;
    font-size: 14px;
    line-height: 18px;
    padding: 14px 50px 14px 14px;
  }

  @media (max-width: 768px) {
    height: 44px;
    font-size: 12px;
    line-height: 16px;
    padding: 14px;
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  cursor: pointer;
  right: 15px;
  width: 20px;
  height: 20px;

  @media (max-width: 1440px) {
    right: 15px;
    width: 20px;
    height: 20px;
    z-index: 10;
  }

  @media (max-width: 768px) {
    top: 48%;
    right: 16px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
  }
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 14px;
  }
`;

export const LoginButton = styled.button`
  background-color: var(--white);
  border-radius: 30px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--lightblack);
  border: none;
  cursor: pointer;
  opacity: 1;
  width: 225px;
  height: 52px;
  font-size: 20px;
  line-height: 20px;
  padding: 16px;

  &:hover {
    color: var(--white);
    background-color: var(--black);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }

  @media (max-width: 1440px) {
    width: 225px;
    height: 52px;
    font-size: 20px;
    line-height: 20px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 42px;
    font-size: 14px;
    line-height: 18px;
    padding: 12px;
  }
`;

export const LinkText = styled.p`
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: right;
  text-decoration: underline;
  color: var(--lightgray);
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    color: var(--white);
  }

  @media (max-width: 1440px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #e90516;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
`;
