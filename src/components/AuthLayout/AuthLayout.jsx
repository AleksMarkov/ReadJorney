//AuthLayout.jsx
import React from 'react';
import {
  Container,
  TitleContainer,
  MobLogo,
  Logo,
  Title,
  PhoneMockup,
  PhoneImage,
  PhoneImageTablet,
} from './AuthLayout.styled.jsx';
import logomob from '../../assets/svg/Logomobile.svg';
import logodesk from '../../assets/svg/Logotablet.svg';
import phoneMockup from '../../assets/images/phoneMockup.png';
import phoneMockuptablet from '../../assets/images/iPhone.jpg';

const AuthLayout = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <MobLogo src={logomob} alt="logo mobile" />{' '}
        <Logo src={logodesk} alt="logo desktop" />
        <Title>{title}</Title>
        {children}
      </TitleContainer>
      <PhoneMockup>
        <PhoneImage src={phoneMockup} alt="Phone Mockup" />{' '}
        <PhoneImageTablet src={phoneMockuptablet} alt="Phone Mockup tablet" />
      </PhoneMockup>
    </Container>
  );
};

export default AuthLayout;
