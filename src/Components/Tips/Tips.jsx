import React, { useContext, useEffect, useState } from 'react';
import TipTableBody from './TipTableBody';
import { useLoaderData } from 'react-router';
import { ThemeContext } from '../../Context/UserAuth';

const Tips = () => {
  const loaderData = useLoaderData();
  const { theme } = useContext(ThemeContext)
  const [data, setData] = useState([]);

  useEffect(() => {
    const singleData = loaderData.filter(d => d.status === true);

    setData(singleData);

  }, [loaderData]);

  return (
    <div className={`p-2 mx-auto sm:p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className={`${theme === 'dark' ? 'bg-green-500 text-black' : 'bg-green-400 text-black'}`}>
            <tr className="text-left">
              <th className="p-3">Category</th>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((singleTip) => (
                <TipTableBody key={singleTip._id} singleTip={singleTip} theme={theme} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tips;