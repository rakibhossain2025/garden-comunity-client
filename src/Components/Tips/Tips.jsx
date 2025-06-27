import React, { useEffect, useState } from 'react';
import TipTableBody from './TipTableBody';
import { FaFilter } from 'react-icons/fa';
import Loading from '../Loading';

const Tips = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);
  const [difficultyF, setDifficultyF] = useState('All');
  document.title = 'Gardening Community | Browse-tips';


  useEffect(() => {
    setLoading(true)
    // Fetch the data and set it after ensuring it's properly loaded
    fetch('https://assignment-10-server-virid-theta.vercel.app/active-gardeners')
      .then(r => r.json())
      .then(d => {
        // Filter the data and set the state
        const filteredData = d.filter(d => d.availability !== "Hidden");
        setData(filteredData);
      }).finally(()=>setLoading(false))

  }, []);

  const filterD = data.filter(d => {
    return difficultyF === "All" || d.difficulty === difficultyF;
  });



  if (loading) return <Loading />

  return (
    <div className="p-4 sm:p-6">
      {/* Header Filter */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-semibold">Tips</h2>
        <div className="flex items-center gap-2">
          <label htmlFor="difficulty" className="flex items-center gap-1 font-medium">
            Filter by Difficulty: <FaFilter className="opacity-70" />
          </label>
          <select
            id="difficulty"
            value={difficultyF}
            onChange={(e) => setDifficultyF(e.target.value)}
            className="px-3 py-1 border rounded border-gray-400 dark:border-gray-600 bg-white dark:bg-[#2e2e2e] text-black dark:text-white"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 border-b text-left">Image</th>
              <th className="p-3 border-b text-left">Title</th>
              <th className="p-3 border-b text-left">Category</th>
              <th className="p-3 border-b text-left">Difficulty</th>
              <th className="p-3 border-b text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterD.map((singleTip) => (
              <TipTableBody key={singleTip._id} singleTip={singleTip} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tips;
