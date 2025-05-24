import React from 'react';
import { useNavigate } from 'react-router';

const TipTableBody = ({ singleTip, theme }) => {
  const navigate = useNavigate()
  const { category, imageUrl, title, _id, difficulty } = singleTip
  const singleData = (id) => {

    navigate(`/tip-details/${id}`, { state: id })
  }

  return (
    <tr
      className={`border-b border-opacity-20 transition duration-300
        ${theme === 'dark'
          ? 'hover:bg-green-100/30 bg-[#0f172a] text-white dark:border-gray-700'
          : 'hover:bg-green-200 bg-white text-black border-gray-300'
        }`}
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
          className={`px-3 py-1 cursor-pointer font-semibold rounded-md transition
            ${theme === 'dark'
              ? 'bg-green-600 text-white hover:bg-green-500'
              : 'bg-green-400 text-black hover:bg-green-500'
            }`}
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export default TipTableBody;