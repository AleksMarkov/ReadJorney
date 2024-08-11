//useScreenSize.js
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setScreenSize } from '../redux/screenSizeSlice';

export const useScreenSize = () => {
  const dispatch = useDispatch();
  const [screenSize, setScreenSizeLocal] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (screenSize !== width) {
        setScreenSizeLocal(width);
        dispatch(setScreenSize(width));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, screenSize]);

  return screenSize;
};
