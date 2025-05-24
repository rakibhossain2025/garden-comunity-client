import React, { useContext, useEffect, useState } from 'react';
import TipTableBody from './TipTableBody';
import { useLoaderData } from 'react-router';
import { ThemeContext } from '../../Context/UserAuth';
import { FaFilter } from 'react-icons/fa';

const Tips = () => {
  const loaderData = useLoaderData();
  const { theme } = useContext(ThemeContext)
  const [data, setData] = useState([]);
  const [difficultyF, setDifficultyF] = useState('All');
  const [recentPose, setRecentPost] = useState([])
  document.title = 'Gardening Community | Browse-tips'
  useEffect(() => {
    const singleData = loaderData.filter(d => d.availability !== "Hidden");
    setData(singleData);
  }, [loaderData]);

  const filterD = data.filter(d => {
    return difficultyF === "All" || d.difficulty === difficultyF
  })

  useEffect(() => {
    fetch("https://assignment-10-server-virid-theta.vercel.app/tips/")
      .then(res => res.json())
      .then(data => setRecentPost(data))
  }, [])
  return (
    <div className={`p-2 mx-auto sm:p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Tips</h2>
        <div className="flex items-center">
          <label htmlFor="difficulty" className={`mr-2 flex gap-1 items-center text-green-600 font-medium ${theme === 'dark' ? "text-white" : ''}`}>Filter by Difficulty:<FaFilter /></label>
          <select
            id="difficulty"
            value={difficultyF}
            onChange={(e) => setDifficultyF(e.target.value)}
            className={`border px-3 py-1 rounded ${theme === 'dark'
              ? 'bg-gray-800 text-white border-green-500'
              : 'bg-white text-black border-green-600'
              }`}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className={`${theme === 'dark' ? 'bg-green-500 text-black' : 'bg-green-400 text-black'}`}>
            <tr className="text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Difficulty</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterD.map((singleTip) => (
              <TipTableBody key={singleTip._id} singleTip={singleTip} theme={theme} />
            ))}
          </tbody>
        </table>
      </div>
      <div className=" px-4 py-12">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-[#52F757]' : 'text-green-700'
            }`}
        >
          Recently Added Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recentPose.map((tip, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 hover:shadow-lg transition shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                }`}
            >
              <h3 className={`text-2xl font-semibold ${theme === 'dark' && 'text-[#52F757]'} 0 mb-2`}>{tip.title}</h3>
              {
                tip.category && (
                  <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-500'}`}>
                    Category: {tip.category}
                  </p>
                )
              }
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Tips;