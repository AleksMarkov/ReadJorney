//RegistrationForm.jsx
// components/Forms/RegistrationForm.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registrationSchema from '../../../schemas/registrationSchema';
import { AuthContext } from '../../../context/AuthContext';
import Notification from '../../Notification/Notification';
import {
  InputContainer,
  InputWrapper,
  Input,
  EyeIcon,
  RegBlock,
  RegistrationButton,
  LinkText,
  ErrorMessage,
} from './RegistrationForm.styled';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';

const RegistrationForm = () => {
  const { signup } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null);
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
      navigate('/recommended');
    } catch (error) {
      console.error('Signup failed:', error);
      setNotification(
        error.response?.data?.message || 'Signup failed. Please try again.'
      );
    }
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputWrapper>
            <Input type="text" placeholder="Name:" {...register('name')} />
          </InputWrapper>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <InputWrapper>
            <Input type="email" placeholder="Mail:" {...register('email')} />
          </InputWrapper>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
    </>
  );
};

export default RegistrationForm;
