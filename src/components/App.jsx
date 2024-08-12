//App.jsx
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';

const Reg = lazy(() => import('./Reg/Reg'));
const Log = lazy(() => import('./Log/Log'));
const Recommended = lazy(() => import('./Recom/Recommended/Recommended'));
const RecommendedDesk = lazy(() =>
  import('./Recom/RecommendedDesk/RecommendedDesk')
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/registration" element={<Reg />} />
        <Route path="/login" element={<Log />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/1" element={<RecommendedDesk />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
