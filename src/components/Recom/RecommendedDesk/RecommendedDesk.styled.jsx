//RecommendedDesk.styled.jsx
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
`;

export const MenuSection = styled.div`
  width: 158px;
  height: 26px;
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GetButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: var(--lightgray);
  background-color: var(--lightblack);

  &:hover {
    color: var(--white);
    cursor: pointer;
  }
`;

export const MobLogo = styled.img`
  width: 182px;
  height: 17px;
  color: var(--white);
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--white);
  margin-right: 8px;
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
`;

export const BodySection = styled.div`
  width: 1280px;
  height: 700px;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const SidebarSection = styled.div`
  gap: 20px;
  width: 353px;
  height: 651px;
  background-color: var(--lightblack);
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

export const FiltersSection = styled.div`
  width: 313px;
  height: 197px;
  background-color: var(--lightblack);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 8px;
`;
export const FilteText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--white);
  margin-left: 14px;
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
  background: none;
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;
`;

export const RecommendedSection = styled.div`
  width: 847px;
  height: 651px;

  background: #1f1f1f;
  border-radius: 30px;

  padding: 16px;
`;

export const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const BookItem = styled.div`
  width: 137px;
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookCover = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px;
`;

export const BookTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #f9f9f9;
  text-align: center;
`;

export const BookAuthor = styled.p`
  font-family: 'Gilroy';
  font-weight: 500;
  font-size: 10px;
  color: #686868;
  text-align: center;
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
`;

export const WorkoutTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: left;
  margin-bottom: 20px;
`;

export const WorkoutStep = styled.div`
  width: 253px;
  height: 54px;
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  //   margin-bottom: 20px;
`;

export const WorkoutIcon = styled.div`
  width: 44px;
  height: 44px;
  background: #f9f9f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Gilroy';
  font-weight: 700;
  color: var(--lightblack);
`;

export const WorkoutDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--white);
  flex: 1;
`;

export const MyLibraryLink = styled.a`
  font-family: 'Gilroy';
  font-size: 14px;
  color: #686868;
  text-decoration: underline;
  cursor: pointer;
`;

export const ArrowNavigation = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 50%;
  background: none;
  color: #f9f9f9;
  font-size: 18px;
  cursor: pointer;
`;
