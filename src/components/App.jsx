//App.jsx
import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const TeachersPage = lazy(() => import('../pages/TeachersPage/TeachersPage'));
// const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));

document.documentElement.setAttribute('data-theme', 'yellow');

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
