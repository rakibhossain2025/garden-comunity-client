import React from 'react';

const SingleTrend = (trending) => {
  const { tips } = trending.trending
  return (
    //  bg-[#2C2C33]
    // text-[#52f757]
    <div className='mr-4 pb-12'>
      <div className='text-[#151d16] px-2 py-2 min-h-8 h-32 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-center text-xl text-center'>
        <h1 className='font-bold'>Tips</h1>
        <h1>{tips}</h1>
      </div>
    </div>
  );
};

export default SingleTrend;