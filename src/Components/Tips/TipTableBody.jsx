import React from 'react';

const TipTableBody = ({ singleTip }) => {
  const { category, imageUrl, title, _id } = singleTip

  return (
    <tr className="border-b  hover:bg-gray-100 border-opacity-20 dark:border-gray-300 dark:bg-gray-50">

      <td className="p-3">
        <p>{category}</p>
      </td>
      <td className="p-3">
        <img src={imageUrl} className='w-8 h-8' />

      </td>
      <td className="p-3">
        <p>{title}</p>
      </td>
      <td className="p-3 text-right">
        <button onClick={() => { console.log(_id) }} className="px-3 py-1 cursor-pointer font-semibold rounded-md dark:bg-green-600 dark:text-gray-50 text-right">Pending</button>

      </td>

    </tr>
  );
};

export default TipTableBody;