import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/UserAuth';
import { BiLike, BiSolidLike } from 'react-icons/bi';

const SingleTrend = ({ trending }) => {
  const { tips, _id } = trending
  const { theme } = useContext(ThemeContext)
  const [likes, setLikes] = useState(trending.totalLiked || 0);
  const [Disable, setDisable] = useState(false);
  const handleLike = async () => {

    const res = await fetch(`https://assignment-10-server-virid-theta.vercel.app/activeGardeners/like/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();

    if (result.modifiedCount > 0) {
      setLikes((prev) => prev + 1);
      setDisable(true)
    }

  }

  return (
    <div className='mr-4 pb-12'>
      <div
        className={`px-2 relative py-4 min-h-42 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-center items-center text-xl text-center transition duration-300
          ${theme === 'light' ? 'bg-white text-[#151d16]' : 'bg-[#2C2C33] text-[#52f757]'}`}
      >
        <h1 className='font-bold mb-2 absolute top-1 left-1/2 border-b'>Tips</h1>
        <p className="mt-4">{tips}</p>


        <button
          disabled={Disable}
          onClick={handleLike}
          className={`
    flex items-center gap-2 font-bold px-5 py-2 transition-all duration-300 absolute top-0 right-0 rounded-bl-2xl rounded-tr-2xl
    ${Disable
              ? 'bg-gray-500 text-white cursor-not-allowed opacity-70'
              : 'bg-green-600 hover:bg-green-700 text-white hover:scale-105 shadow-md'}
  `}
        >
          {Disable ? (
            <BiSolidLike className="text-lg" />
          ) : (
            <BiLike className="text-lg animate-pulse" />
          )}
          <span className="text-base font-semibold">({likes})</span>
        </button>
      </div>
    </div>
  );
};

export default SingleTrend;