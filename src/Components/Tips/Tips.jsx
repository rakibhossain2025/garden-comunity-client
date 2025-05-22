import React, { useEffect, useState } from 'react';
import TipTableBody from './TipTableBody';

const Tips = () => {
  const [allTips, setAllTips] = useState([])
  useEffect(() => {
    fetch('https://assignment-10-server-virid-theta.vercel.app/active-gardeners')
      .then(res => res.json())
      .then(data => setAllTips(data))
  }, [])
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">

          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Category</th>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3 text-right">Edit</th>
            </tr>
          </thead>
          <tbody>
              {
                allTips.map((singleTip) => (
                  < TipTableBody key={singleTip._id} singleTip={singleTip} />
                ))
              }
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tips;