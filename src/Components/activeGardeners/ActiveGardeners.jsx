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
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === "light" ? "text-[#003401]" : "text-[#52f757]"}`}>
        🌿 Featured Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {active.map((gardener, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md transition duration-300 ${theme === "light" ? "bg-white " : "bg-[#1e1e1e] text-[#52f757]"}`}
          >
            <img src={gardener.imageUrl} alt={gardener.UserName} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">category: {gardener.category}</h3>
            <p className="text-sm">difficulty: {gardener.difficulty}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActiveGardeners;