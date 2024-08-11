//Reg.jsx;
import React from 'react';
import Registration from './Registration/Registration';
import RegistrationTablet from './RegistrationTablet/RegistrationTablet';
import RegistrationDesk from './RegistrationDesk/RegistrationDesk';
import { useScreenSize } from '../../hooks/useScreenSize';

const Reg = () => {
  const screenSize = useScreenSize();

  if (screenSize >= 320 && screenSize <= 767) {
    return <Registration />;
  } else if (screenSize >= 768 && screenSize <= 1439) {
    return <RegistrationTablet />;
  } else if (screenSize >= 1440) {
    return <RegistrationDesk />;
  } else {
    return null;
  }
};

export default Reg;
