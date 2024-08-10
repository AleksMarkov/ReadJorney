//App.jsx
import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Registration = lazy(() => import('./Registration/Registration'));
const RegistrationDesk = lazy(() =>
  import('./RegistrationDesk/RegistrationDesk')
);
const Login = lazy(() => import('./Login/Login'));
const Recommended = lazy(() => import('./Recommended/Recommended'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration1" element={<RegistrationDesk />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recommended" element={<Recommended />} />
        {/* <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
