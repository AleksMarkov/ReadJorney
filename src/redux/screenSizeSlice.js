//screenSizeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState: window.innerWidth,
  reducers: {
    setScreenSize: (state, action) => action.payload,
  },
});

export const { setScreenSize } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;
