//Registration.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: auto;

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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 472px;
    gap: 14px;
    margin-bottom: 82px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 82px;
    gap: 14px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background-color: var(--darkgray);
  border-radius: 12px;
  padding: 14px;
  color: var(--white);
  border: none;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;

  &::placeholder {
    color: var(--lightgray);
  }

  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.1);
    outline: none;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    height: 44px;
    font-size: 12px;
    line-height: 16px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 50px;
    font-size: 14px;
    line-height: 18px;
    padding: 14px 50px 14px 14px;
  }

  @media (min-width: 1440px) {
    height: 44px;
    font-size: 14px;
    line-height: 18px;
    padding: 14px 50px 14px 14px;
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 31%;
    right: 57px;
    transform: translateY(-35%);
    width: 18px;
    height: 18px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    right: 15px;
    width: 20px;
    height: 20px;
    z-index: 10;
  }

  @media (min-width: 1440px) {
    right: 15px;
    width: 20px;
    height: 20px;
  }
`;

export const RegBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    gap: 14px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    gap: 20px;
  }

  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

export const RegistrationButton = styled.button`
  background-color: var(--white);
  border-radius: 30px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--lightblack);
  border: none;
  cursor: pointer;
  opacity: 1;

  &:hover {
    color: var(--white);
    background-color: var(--black);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 140px;
    height: 42px;
    font-size: 14px;
    line-height: 18px;
    padding: 12px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 225px;
    height: 52px;
    font-size: 20px;
    line-height: 20px;
    padding: 16px;
  }

  @media (min-width: 1440px) {
    width: 225px;
    height: 52px;
    font-size: 20px;
    line-height: 20px;
    padding: 16px;
  }
`;

export const LinkText = styled.p`
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: right;
  text-decoration: underline;
  color: var(--lightgray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 18px;
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
  // display: none;

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

// export const PhoneMockup = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-radius: 30px;
//   background-color: var(--lightblack);
//   justify-content: start;
//   align-items: center;

//   @media (min-width: 320px) and (max-width: 767px) {
//     width: 335px;
//     height: 351px;
//     padding: 0 20px;
//   }

//   @media (min-width: 768px) and (max-width: 1439px) {
//     width: 704px;
//     height: 960px;
//     padding: 40px 0;
//   }

//   @media (min-width: 1440px) {
//     width: 600px;
//     height: 736px;
//     padding: 40px 0;
//   }
// `;

// export const PhoneImage = styled.img`
//   object-fit: cover;
//   background-color: var(--black);

//   @media (min-width: 320px) and (max-width: 767px) {
//     width: 255px;
//     height: 351px;
//     opacity: 1;
//   }

//   @media (min-width: 768px) and (max-width: 1439px) {
//     width: 403px;
//     height: 720px;
//     border-radius: 68px 68px 0 0;
//   }

//   @media (min-width: 1440px) {
//     width: 403px;
//     height: 720px;
//     border-radius: 68px 68px 0 0;
//   }
// `;

// export const PhoneImageTablet = styled.img`
//   object-fit: cover;
//   background-color: var(--black);
//   width: 403px;
//   height: 720px;
//   border-radius: 68px 68px 0 0;

//   @media (max-width: 1440px) {
//     display: none;
//   }
// `;

export const ErrorMessage = styled.p`
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #e90516;
  text-align: left;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 10px;
    line-height: 12px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 10px;
    line-height: 12px;
  }

  @media (min-width: 1440px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
