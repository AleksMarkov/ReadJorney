//Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TitleContainer,
  MobLogo,
  Title,
  InputContainer,
  Input,
  EyeIcon,
  LoginBlock,
  LoginButton,
  LinkText,
  PhoneMockup,
  PhoneImage,
} from './Login.styled.jsx';
import logomob from '../../../assets/svg/Logomobile.svg';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';
import phoneMockup from '../../../assets/images/phoneMockup.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <TitleContainer>
        <MobLogo src={logomob} alt="logo mobile" />
        <Title>
          Expand your mind, <br />
          reading <span>a book</span>
        </Title>
        <InputContainer>
          <Input type="email" placeholder="Mail:" />
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password:"
          />
          <EyeIcon
            src={showPassword ? eyeOn : eyeOff}
            alt="Toggle Password Visibility"
            onClick={togglePasswordVisibility}
          />
        </InputContainer>
        <LoginBlock>
          <LoginButton>Log in</LoginButton>
          <LinkText onClick={() => navigate('/registration')}>
            Don't have an account?
          </LinkText>
        </LoginBlock>
      </TitleContainer>
      <PhoneMockup>
        <PhoneImage src={phoneMockup} alt="Phone Mockup" />
      </PhoneMockup>
    </Container>
  );
};

export default Login;
