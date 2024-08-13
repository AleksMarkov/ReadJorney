//store.js
import { configureStore } from '@reduxjs/toolkit';
import screenSizeReducer from './screenSizeSlice';
import bookLSReducer from './bookLSSlice';

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    bookLS: bookLSReducer,
  },
});

export default store;
