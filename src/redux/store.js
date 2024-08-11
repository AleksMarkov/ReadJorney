//store.js
import { configureStore } from '@reduxjs/toolkit';
import screenSizeReducer from './screenSizeSlice';

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
  },
});

export default store;
