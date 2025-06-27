import React from 'react';
import { useNavigate } from 'react-router';

const TipTableBody = ({ singleTip }) => {
  const navigate = useNavigate()
  const { category, imageUrl, title, _id, difficulty } = singleTip
  const singleData = (id) => {

    navigate(`/tip-details/${id}`, { state: id })
  }

  return (
   <tr
  className="border-b dark:border-gray-700 border-gray-300 bg-white dark:bg-[#0f172a] hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
>
  <td className="px-3 py-6">
    <img src={imageUrl} alt="Tip" className="w-12 h-12 object-cover rounded" />
  </td>
  <td className="px-3 py-6">
    <p>{title}</p>
  </td>
  <td className="px-3 py-6">
    <p>{category}</p>
  </td>
  <td className="px-3 py-6">
    <p>{difficulty}</p>
  </td>
  <td className="px-3 py-6 text-right">
    <button
      onClick={() => singleData(_id)}
      className="px-3 py-1 font-medium rounded-md bg-black text-white hover:opacity-80 dark:bg-white dark:text-black transition"
    >
      Details
    </button>
  </td>
</tr>

  );
};

export default TipTableBody;