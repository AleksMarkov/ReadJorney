//RegistrationDesk.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from './RegistrationDesk.styled.jsx';
import logotablet from '../../../assets/svg/Logotablet.svg';
import eyeOff from '../../../assets/svg/eyeOff.svg';
import eyeOn from '../../../assets/svg/eyeOn.svg';
import iphonedesk from '../../../assets/images/iPhone.jpg';

const RegistrationDesk = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <TitleContainer>
        <MobLogo src={logotablet} alt="logo mobile" />
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        <InputContainer>
          <InputWrapper>
            <Input type="text" placeholder="Name:" />
          </InputWrapper>
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
        <RegBlock>
          <RegistrationButton>Registration</RegistrationButton>
          <LinkText onClick={() => navigate('/login')}>
            Already have an account?
          </LinkText>
        </RegBlock>
      </TitleContainer>
      <PhoneMockup>
        <PhoneImage src={iphonedesk} alt="Phone Mockup" />
      </PhoneMockup>
    </Container>
  );
};

export default RegistrationDesk;
