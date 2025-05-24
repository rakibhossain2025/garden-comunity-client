import React, { useContext, useEffect, useState } from 'react';
import TipTableBody from './TipTableBody';
import { useLoaderData } from 'react-router';
import { ThemeContext } from '../../Context/UserAuth';

const Tips = () => {
  const loaderData = useLoaderData();
  const { theme } = useContext(ThemeContext)
  const [data, setData] = useState([]);
  const [difficultyF, setDifficultyF] = useState('All');
  useEffect(() => {
    const singleData = loaderData.filter(d => d.availability !== "Hidden");
    setData(singleData);
  }, [loaderData]);
  console.log(data)

  const filterD = data.filter(d => {
    return difficultyF === "All" || d.difficulty === difficultyF
  })

  return (
     <div className={`p-2 mx-auto sm:p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Tips</h2>

        {/* Difficulty Filter Dropdown */}
        <div className="flex items-center">
          <label htmlFor="difficulty" className="mr-2 text-green-600 font-medium">Filter by Difficulty:</label>
          <select
            id="difficulty"
            value={difficultyF}
            onChange={(e) => setDifficultyF(e.target.value)}
            className={`border px-3 py-1 rounded ${
              theme === 'dark'
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
    </div>
  );
};

export default Tips;