//LoginTablet.styled.jsx;
import styled from 'styled-components';

export const Container = styled.div`
  width: 768px;
  height: 1024px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  padding: 32px;
  margin: auto; /* Это свойство автоматически добавит одинаковые отступы сверху и снизу, чтобы элемент был в центре */

  /* Чтобы полностью центрировать элемент по горизонтали и вертикали, можно использовать flexbox на уровне body или другого родительского элемента: */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleContainer = styled.div`
  width: 704px;
  height: 960px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: var(--lightblack);
  align-items: left;
  padding: 40px 64px;
`;

export const Logo = styled.img`
  width: 182px;
  height: 17px;
  color: var(--white);
  margin-bottom: 157px;
`;

export const Title = styled.h1`
  width: 444px;
  height: 180px;
  font-size: 64px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0.02em;
  text-align: left;
  color: var(--white);
  margin-bottom: 40px;

  span {
    color: rgba(227, 227, 227, 0.3);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 472px;
  margin-bottom: 82px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: var(--darkgray);
  border-radius: 12px;
  padding: 14px 50px 14px 14px;
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

export const EyeIcon = styled.img`
  position: absolute;
  right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 10;
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
`;

export const LoginButton = styled.button`
  width: 225px;
  height: 52px;
  background-color: var(--white);
  border-radius: 30px;
  padding: 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
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
`;

export const LinkText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: right;
  text-decoration: underline;
  color: var(--lightgray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;
export const ErrorMessage = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: #e90516;
  text-align: left;
`;
