import React from 'react';
import TipTableBody from './TipTableBody';
import { useLoaderData } from 'react-router';

const Tips = () => {
  const loaderData = useLoaderData()
  return (
    <div className="container p-2 mx-auto sm:p-4 ">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead className="dark:bg-green-400 ">
            <tr className="text-left">
              <th className="p-3">Category</th>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              loaderData.map((singleTip) => (
                < TipTableBody key={singleTip._id} singleTip={singleTip} loaderData={loaderData} />
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tips;