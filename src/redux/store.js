//store.js
import { configureStore } from '@reduxjs/toolkit';
import screenSizeReducer from './screenSizeSlice';
import bookLSReducer from './bookLSSlice';
import userBooksReducer from './userBooksSlice'; // Import the reducer

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    bookLS: bookLSReducer,
    userBooks: userBooksReducer, // Add it to the store
  },
});

export default store;
