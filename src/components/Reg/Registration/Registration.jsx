//Registration.jsx;
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../../../context/AuthContext';
import registrationSchema from '../../../schemas/registrationSchema';
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
} from './Registration.styled.jsx';
import logomob from '../../../assets/svg/Logomobile.svg';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';
import phoneMockup from '../../../assets/images/phoneMockup.jpg';

const Registration = () => {
  const { signup } = useContext(AuthContext); // Make sure this is not undefined
  const [showPassword, setShowPassword] = useState(false);
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
      await signup(data);
      navigate('/recommended'); // Redirect to a protected route after signup
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <MobLogo src={logomob} alt="logo mobile" />
        <Title>
          Expand your mind, <br />
          reading <span>a book</span>
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
        <PhoneImage src={phoneMockup} alt="Phone Mockup" />
      </PhoneMockup>
    </Container>
  );
};

export default Registration;
