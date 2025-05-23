import React from 'react';
import {  useNavigate } from 'react-router';

const TipTableBody = ({ singleTip }) => {
  const navigate = useNavigate()

 
  const { category, imageUrl, title, _id } = singleTip


  const singleData = (id) => {
   
      navigate(`/tip-details/${id}`, {state: id} )
  }

  return (
    <tr className="border-b hover:bg-green-200 border-opacity-20 dark:border-gray-300 dark:bg-gray-50">

      <td className="px-3 py-6">
        <p>{category}</p>
      </td>
      <td className="px-3 py-6">
        <img src={imageUrl} className='w-12 h-12' />

      </td>
      <td className="px-3 py-6">
        <p>{title}</p>
      </td>
      <td className="px-3 py-6 text-right">
        <button onClick={() => singleData(_id)} className="px-3 py-1 cursor-pointer font-semibold rounded-md dark:bg-green-600 dark:text-gray-50 text-right">Details</button>
      </td>
    </tr>
  );
};

export default TipTableBody;