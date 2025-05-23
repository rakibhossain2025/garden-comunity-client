import React from 'react';

const Loading = () => {
  return (
    <div className='min-h-[calc(100vh-200px)] flex flex-col justify-center items-center'>
     <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loading;