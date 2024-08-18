//Login.jsx
import React from 'react';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import LoginForm from '../../components/AuthLayout/LoginForm/LoginForm';

const Login = () => {
  return (
    <AuthLayout title="Expand your mind, reading a book">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
