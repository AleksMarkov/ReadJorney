//Log.jsx
import React from 'react';
import Login from './Login/Login';
import LoginTablet from './LoginTablet/LoginTablet';
import LoginDesk from './LoginDesk/LoginDesk';
import { useScreenSize } from '../../hooks/useScreenSize';

const Log = () => {
  const screenSize = useScreenSize();

  if (screenSize >= 320 && screenSize <= 767) {
    return <Login />;
  } else if (screenSize >= 768 && screenSize <= 1439) {
    return <LoginTablet />;
  } else if (screenSize >= 1440) {
    return <LoginDesk />;
  } else {
    return null;
  }
};

export default Log;
