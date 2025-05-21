import React, { useEffect, useState } from 'react';

const Tips = () => {
  const [allTips, setAllTips] = useState()
  useEffect(() => {

    fetch('http://localhost:5000/tips')
      .then(res => res.json())
      .then(data => setAllTips(data))
  }, [])
  console.log(allTips)
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
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
              <td className="p-3">
                <p>pal</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-gray-600">Tuesday</p>
              </td>
              <td className="p-3">
                <p>$15,792</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 text-right">
                  <span>Pending</span>
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tips;