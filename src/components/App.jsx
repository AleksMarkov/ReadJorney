//App.jsx
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';

const Reg = lazy(() => import('./Reg/Reg'));
const Log = lazy(() => import('./Log/Log'));
const RecommendedDesk = lazy(() => import('./Recom/RecommendedDesk'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/registration" element={<Reg />} />
        <Route path="/login" element={<Log />} />
        <Route path="/recommended" element={<RecommendedDesk />} />

        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
