//Login.jsx
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
  ErrorMessage,
} from './Login.styled.jsx';
import logomob from '../../../assets/svg/Logomobile.svg';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';
import phoneMockup from '../../../assets/images/phoneMockup.png';

const Login = () => {
  const { signin } = useContext(AuthContext); // Get the signin function from AuthContext
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null); // For showing error messages
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
      await signin(data); // Send login data to backend
      navigate('/recommended'); // Redirect to a protected route after login
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
        <MobLogo src={logomob} alt="logo mobile" />
        <Title>
          Expand your mind, <br />
          reading <span>a book</span>
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input type="email" placeholder="Mail:" {...register('email')} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
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
        <PhoneImage src={phoneMockup} alt="Phone Mockup" />
      </PhoneMockup>
    </Container>
  );
};

export default Login;
