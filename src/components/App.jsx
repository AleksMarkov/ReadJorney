//App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Reg = lazy(() => import('./Reg/Reg'));
const Log = lazy(() => import('./Log/Log'));
const RecommendedDesk = lazy(() => import('../pages/Recommended/Recommended'));
const MyLibrary = lazy(() => import('../pages/MyLibrary/MyLibrary'));
const Reading = lazy(() => import('../pages/Reading/Reading'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/registration" element={<PublicRoute element={Reg} />} />
        <Route path="/login" element={<PublicRoute element={Log} />} />
        <Route
          path="/recommended/*"
          element={<PrivateRoute element={RecommendedDesk} />}
        />
        <Route
          path="/library/*"
          element={<PrivateRoute element={MyLibrary} />}
        />
        <Route path="/reading/*" element={<PrivateRoute element={Reading} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
