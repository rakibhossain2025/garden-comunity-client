import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Context/UserAuth';

const ActiveGardeners = ({ loader }) => {
  const { theme } = useContext(ThemeContext)
  const [active, setActive] = useState([])
  useEffect(() => {
    const activeProfile = loader.filter(a => a.availability !== "Hidden")
    setActive(activeProfile)
  }, [loader])
  return (
    <>
      <h2 className='text-xl lg:text-5xl text-center font-bold my-4'>Active Gardeners</h2>
      <h2 className={`text-xl font-bold mb-8 text-center ${theme === "light" ? "text-[#063007] underline" : "text-[#52f757]"}`}>
        Featured Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {active.map((gardener, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ${theme === "light"
                ? "bg-white text-gray-800"
                : "bg-[#1e1e1e] text-[#52f757]"
              }`}
          >
            <img
              src={gardener.userImg}
              alt={gardener.UserName}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-400 object-cover shadow-md"
            />

            <h3 className="text-xl font-bold text-center mb-1">{gardener.UserName}</h3>

            <p className="text-sm text-center mb-1 italic">{gardener.category}</p>
            <p className="text-sm text-center mb-2"><span className='font-bold'>Difficulty:</span> {gardener.difficulty}</p>

            <div className="flex justify-center gap-4 text-sm mb-3">
              <span>{gardener.plantType}</span>
              <span>{gardener.experience}</span>
              <span>{gardener.age} yrs</span>
            </div>

            <p className="text-xs text-center italic text-gray-500 dark:text-[#aaaaaa]">
              "{gardener.tips?.slice(0, 60)}..."
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActiveGardeners;