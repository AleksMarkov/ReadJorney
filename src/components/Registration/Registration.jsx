//Registration.jsx;
import React, { useState } from 'react';
import {
  Container,
  TitleContainer,
  MobLogo,
  Title,
  InputContainer,
  Input,
  EyeIcon,
  RegBlock,
  RegistrationButton,
  LinkText,
  PhoneMockup,
  PhoneImage,
} from './Registration.styled.jsx';
import logomob from '../../assets/svg/Logomobile.svg';
import eyeOff from '../../assets/svg/eyeOff.svg';
import eyeOn from '../../assets/svg/eyeOn.svg';
import phoneMockup from '../../assets/images/phoneMockup.png';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          <Input type="text" placeholder="Name:" />
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
        <RegBlock>
          <RegistrationButton>Registration</RegistrationButton>
          <LinkText>Already have an account?</LinkText>
        </RegBlock>
      </TitleContainer>
      <PhoneMockup>
        <PhoneImage src={phoneMockup} alt="Phone Mockup" />
      </PhoneMockup>
    </Container>
  );
};

export default Registration;
