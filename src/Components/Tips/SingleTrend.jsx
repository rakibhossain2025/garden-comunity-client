import React from 'react';

const SingleTrend = (trending) => {
  const { tips, imageUrl, UserName } = trending.trending
  return (
    <div className='mr-4 pb-12'>
      <div className='flex flex-col gap-2 px-4 py-2 min-h-12 h-52 rounded-2xl shadow-2xl overflow-hidden justify-center items-center text-center bg-green-200'>
        <img className='w-12 h-12 rounded-full' src={imageUrl} alt={imageUrl} />
        <p>{UserName}</p>
        <h1>{tips}</h1>
      </div>
    </div>
  );
};

export default SingleTrend;