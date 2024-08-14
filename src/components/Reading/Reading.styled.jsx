//Reading.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  height: 800px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px;
  gap: 16px;
  margin: auto; /* Центрирование */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1440px) {
    width: 768px;
    height: 1169px;
  }
  @media (max-width: 768px) {
    width: 375px;
    height: 983px;
    padding: 20px;
    gap: 10px;
  }
`;

export const HeaderSection = styled.div`
  width: 1216px;
  height: 74px;
  background-color: var(--lightblack);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 1440px) {
    width: 704px;
    height: 74px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 57px;
    padding: 11px 20px;
  }
`;

export const MenuSection = styled.div`
  width: 158px;
  height: 26px;
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    width: 147px;
    gap: 32px;
  }

  @media (max-width: 768px) {
    margin-top: 240px;
    width: 75px;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const GetButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--lightgray)')};
  background-color: var(--lightblack);
  border-bottom: ${({ isActive }) =>
    isActive ? '2px solid var(--blue)' : 'none'};

  &:hover {
    color: var(--white);
    cursor: pointer;
  }
`;

export const MobLogo = styled.img`
  width: 182px;
  height: 17px;
  color: var(--white);

  @media (max-width: 1440px) {
    width: 42px;
    content: url(${props => props.mobilesrc});
  }
`;

export const UserSection = styled.div`
  width: 400px;
  height: 42px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;

  @media (max-width: 1440px) {
    width: 175px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--lightblack);
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--white);

  @media (max-width: 768px) {
    line-height: 16px;
    width: 35px;
    height: 35px;
  }
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--white);
  margin-right: 8px;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const LogoutButton = styled.div`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 28px;
  color: var(--white);
  background-color: var(--lightblack);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: center;

  &:hover {
    color: var(--lightblack);
    background-color: var(--white);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserMenu = styled.img`
  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    color: var(--white);
  }
`;

export const BodySection = styled.div`
  width: 1216px;
  height: 700px;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 1440px) {
    width: 704px;
    height: 1015px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 876px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const SidebarSection = styled.div`
  width: 353px;
  height: 651px;
  background-color: var(--lightblack);
  border-radius: 30px;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  @media (max-width: 1440px) {
    width: 704px;
    height: 336px;
    flex-direction: row;
    padding: 32px;
    gap: 32px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 335px;
    height: 484px;
    padding: 20px;
    gap: 20px;
  }
`;

export const FiltersSection = styled.div`
  width: 313px;
  height: 216px;
  background-color: var(--lightblack);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 8px;

  @media (max-width: 1440px) {
    width: 295px;
    height: 244px;
  }
`;

export const FilteText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--white);
  margin-left: 14px;
  margin-top: 20px;

  @media (max-width: 1440px) {
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    margin-top: 0px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 313px;
  height: 50px;
  padding: 16px;
  gap: 8px;
  border-radius: 12px;
  background-color: var(--darkgray);
  color: var(--white);
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;

  &::placeholder {
    color: var(--lightgray);
  }

  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.1);
    outline: none;
  }

  @media (max-width: 1440px) {
    width: 295px;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 44px;
    padding: 14px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.02em;
  }
`;

export const ApplyButton = styled.button`
  padding: 20px;
  width: 122px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  background-color: var(--darkgray);
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    color: var(--lightblack);
    background-color: var(--white);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 38px;
    padding: 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
  }
`;

export const WorkoutSection = styled.div`
  width: 313px;
  height: 272px;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 20px;
  background-color: var(--darkgray);

  @media (max-width: 1440px) {
    height: 272px;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 2250px;
    gap: 20px;
  }
`;

export const WorkoutTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.02em;
    margin-bottom: 0px;
  }
`;

export const WorkoutStep = styled.div`
  width: 252px;
  height: 54px;
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 255px;
  }
`;

export const WorkoutIcon = styled.div`
  width: 44px;
  height: 44px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;

  color: var(--lightblack);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: center;
  }
`;

export const WorkoutDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var (--white);
  flex: 1;

  span {
    color: var(--lightgray);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
  }
`;

export const RecommendedSection = styled.div`
  width: 847px;
  height: 651px;
  background-color: var(--lightblack);
  border-radius: 30px;
  padding: 40px 40px 27px 40px;

  @media (max-width: 1440px) {
    width: 704px;
    height: 663px;
    padding: 40px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 382px;
    padding: 40px 20px;
  }
`;

export const RecommendedBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 27px;

  @media (max-width: 1440px) {
    width: 624px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 295px;
    height: 32px;
    margin-bottom: 22px;
  }
`;

export const RecomText = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-align: left;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ isvisible }) => (isvisible === 'true' ? 'block' : 'none')};
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const PopupMenu = styled.div`
  position: absolute;
  top: 0;
  left: 155px;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--darkgray);
  padding: 40px 20px;
  display: ${({ isvisible }) => (isvisible === 'true' ? 'flex' : 'none')};
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const PopupMenuButton = styled.div`
  width: 91px;
  height: 38px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 10px;
  color: var(--white);
  background-color: var(--lightblack);
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: center;
  margin-top: auto;

  &:hover {
    color: var(--lightblack);
    background-color: var(--white);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 34px;
  right: 40px;
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    color: var(--white);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
