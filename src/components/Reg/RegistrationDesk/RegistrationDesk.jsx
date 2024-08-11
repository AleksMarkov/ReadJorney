//RegistrationDesk.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registrationSchema from '../../../schemas/registrationSchema';
import { AuthContext } from '../../../context/AuthContext';
import Notification from '../../Notification/Notification';
import {
  Container,
  TitleContainer,
  MobLogo,
  Title,
  InputContainer,
  InputWrapper,
  Input,
  EyeIcon,
  RegBlock,
  RegistrationButton,
  LinkText,
  PhoneMockup,
  PhoneImage,
  ErrorMessage,
} from './RegistrationDesk.styled.jsx';
import logotablet from '../../../assets/svg/Logotablet.svg';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';
import iphonedesk from '../../../assets/images/iPhone.jpg';

const RegistrationDesk = () => {
  const { signup } = useContext(AuthContext); // Get the signup function from AuthContext
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null); // For showing error messages
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async data => {
    try {
      await signup(data); // Send signup data to backend
      navigate('/recommended'); // Redirect to a protected route after signup
    } catch (error) {
      console.error('Signup failed:', error);
      setNotification(
        error.response?.data?.message || 'Signup failed. Please try again.'
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
        <MobLogo src={logotablet} alt="logo mobile" />
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <InputWrapper>
              <Input type="text" placeholder="Name:" {...register('name')} />
            </InputWrapper>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
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
          <RegBlock>
            <RegistrationButton type="submit">Registration</RegistrationButton>
            <LinkText onClick={() => navigate('/login')}>
              Already have an account?
            </LinkText>
          </RegBlock>
        </form>
      </TitleContainer>
      <PhoneMockup>
        <PhoneImage src={iphonedesk} alt="Phone Mockup" />
      </PhoneMockup>
    </Container>
  );
};

export default RegistrationDesk;
