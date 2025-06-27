import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    return
  }, [pathname]);
  return (
    <div className='min-h-[calc(100vh-200px)] flex flex-col justify-center items-center'>
      <HashLoader
        color="#00ff36"
        speedMultiplier={1}
      />

    </div>
  );
};

export default Loading;
