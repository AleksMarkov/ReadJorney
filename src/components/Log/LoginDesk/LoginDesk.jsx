//LoginDesk.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '../../../schemas/loginSchema';
import { AuthContext } from '../../../context/AuthContext';
import Notification from '../../Notification/Notification';
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
  PhoneMockup,
  PhoneImage,
  ErrorMessage,
} from './LoginDesk.styled';
import logodesk from '../../../assets/svg/Logotablet.svg';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';
import iphonedesk from '../../../assets/images/iPhone.jpg';

const LoginDesk = () => {
  const { signin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async data => {
    try {
      await signin(data);
      navigate('/recommended');
    } catch (error) {
      console.error('Login failed:', error);
      setNotification(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  };

  return (
    <Container>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <TitleContainer>
        <Logo src={logodesk} alt="logo desktop" />
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <InputWrapper>
              <Input type="email" placeholder="Mail:" {...register('email')} />
            </InputWrapper>
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password:"
                {...register('password')}
              />
              <EyeIcon
                src={showPassword ? eyeOn : eyeOff}
                alt="Toggle Password Visibility"
                onClick={togglePasswordVisibility}
              />
            </InputWrapper>
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputContainer>
          <LoginBlock>
            <LoginButton type="submit">Log in</LoginButton>
            <LinkText onClick={() => navigate('/registration')}>
              Don't have an account?
            </LinkText>
          </LoginBlock>
        </form>
      </TitleContainer>
      <PhoneMockup>
        <PhoneImage src={iphonedesk} alt="Phone Mockup" />
      </PhoneMockup>
    </Container>
  );
};

export default LoginDesk;
