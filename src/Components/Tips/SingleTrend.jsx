import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/UserAuth';

const SingleTrend = (trending) => {
  const { tips } = trending.trending
  const { theme } = useContext(ThemeContext)
  return (
    <div className='mr-4 pb-12'>
      <div
        className={`px-2 relative py-4 min-h-42 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-center text-xl text-center transition duration-300
          ${theme === 'light' ? 'bg-white text-[#151d16]' : 'bg-[#2C2C33] text-[#52f757]'}`}
      >
        <h1 className='font-bold mb-2 absolute top-1 left-1/2 border-b'>Tips</h1>
        <p>{tips}</p>
      </div>
    </div>
  );
};

export default SingleTrend;