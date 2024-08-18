//AuthLayout.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 375px;
    height: 812px;
    gap: 10px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
    height: 1024px;
    padding: 32px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
    height: 800px;
    flex-direction: row;
    padding: 32px;
    gap: 16px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: var(--lightblack);
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 335px;
    height: 411px;
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    height: 960px;
    padding: 40px 64px;
  }

  @media (min-width: 1440px) {
    width: 600px;
    height: 736px;
    padding: 40px 64px;
  }
`;

export const MobLogo = styled.img`
  width: 42px;
  height: 17px;
  color: var(--white);
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 182px;
  height: 17px;
  color: var(--white);
  margin-bottom: 107px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 157px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: left;
  color: var(--white);

  span {
    color: rgba(227, 227, 227, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 295px;
    height: 64px;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 444px;
    height: 180px;
    font-size: 64px;
    line-height: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    width: 444px;
    height: 180px;
    font-size: 64px;
    line-height: 60px;
    margin-bottom: 40px;
  }
`;

export const PhoneMockup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: var(--lightblack);
  justify-content: start;
  align-items: center;
  width: 600px;
  height: 736px;
  padding: 40px 0;

  @media (max-width: 1440px) and (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 351px;
    padding: 0 20px;
  }
`;

export const PhoneImage = styled.img`
  object-fit: cover;
  background-color: var(--black);
  width: 255px;
  height: 351px;
  opacity: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const PhoneImageTablet = styled.img`
  object-fit: cover;
  background-color: var(--black);
  width: 403px;
  height: 720px;
  border-radius: 68px 68px 0 0;

  @media (max-width: 1440px) {
    display: none;
  }
`;
