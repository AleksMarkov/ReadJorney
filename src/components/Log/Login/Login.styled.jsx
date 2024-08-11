//Login.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  width: 335px;
  height: 411px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: var(--lightblack);
  align-items: left;
  padding: 20px;
`;

export const MobLogo = styled.img`
  width: 42px;
  height: 17px;
  color: var(--white);
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  width: 295px;
  height: 64px;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-align: left;
  color: var(--white);
  margin-bottom: 20px;

  span {
    color: rgba(227, 227, 227, 0.3);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 72px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  background-color: var(--darkgray);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.02em;
  border-radius: 12px;
  padding: 14px;
  color: var(--white);
  border: none;

  &::placeholder {
    color: var(--lightgray);
  }

  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.1);
    outline: none;
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  top: 31%;
  right: 57px;
  transform: translateY(-35%);
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  width: 100%;
`;

export const LoginButton = styled.button`
  width: 140px;
  height: 42px;
  background-color: var(--white);
  border-radius: 30px;
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--lightblack);
  border: none;
  cursor: pointer;
  opacity: 1;

  &:hover {
    color: var(--white);
    background-color: var(--black);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }
`;

export const LinkText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: right;
  text-decoration: underline;
  color: var(--lightgray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const PhoneMockup = styled.div`
  width: 335px;
  height: 351px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: var(--lightblack);
  padding: 0px 20px 0px 20px;

  justify-content: start;
  align-items: center;
`;

export const PhoneImage = styled.img`
  width: 255px;
  height: 351px;
  opacity: 0px;
  object-fit: cover;
`;
