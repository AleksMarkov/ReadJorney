//LoginTablet.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TitleContainer,
  Logo,
  Title,
  InputContainer,
  InputWrapper,
  Input,
  EyeIcon,
  LoginBlock,
  LoginButton,
  LinkText,
} from './LoginTablet.styled';
import logotablet from '../../../assets/svg/Logotablet.svg';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';

const LoginTablet = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <TitleContainer>
        <Logo src={logotablet} alt="logo tablet" />
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        <InputContainer>
          <InputWrapper>
            <Input type="email" placeholder="Mail:" />
          </InputWrapper>
          <InputWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password:"
            />
            <EyeIcon
              src={showPassword ? eyeOn : eyeOff}
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
            />
          </InputWrapper>
        </InputContainer>
        <LoginBlock>
          <LoginButton>Log in</LoginButton>
          <LinkText onClick={() => navigate('/registration')}>
            Don't have an account?
          </LinkText>
        </LoginBlock>
      </TitleContainer>
    </Container>
  );
};

export default LoginTablet;
