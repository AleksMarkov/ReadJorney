//Registration.jsx
import React from 'react';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import RegistrationForm from '../../components/AuthLayout/RegistrationForm/RegistrationForm';

const Registration = () => {
  return (
    <AuthLayout title="Expand your mind, reading a book">
      <RegistrationForm />
    </AuthLayout>
  );
};

export default Registration;
