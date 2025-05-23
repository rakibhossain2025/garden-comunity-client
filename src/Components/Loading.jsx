import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
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
