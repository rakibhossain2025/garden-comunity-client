import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { ThemeContext } from '../../../Context/UserAuth';

const MyTipsBody = ({ singleTip, myTips, setMyTips }) => {
  const { theme } = useContext(ThemeContext)
  const { imageUrl, category, _id, title } = singleTip
  const navigate = useNavigate()

  const UpdateData = (id) => {
    console.log(id)
    navigate(`/My-tip/update/${id}`)
  }

  const deleteData = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-virid-theta.vercel.app/tips/${id}`, {
          method: "DELETE"
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            const remaining = myTips.filter(t => t._id !== id)
            setMyTips(remaining)
            console.log(remaining)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          })
      }
    });
  }


  return (
    <tr
      className={`border-b transition duration-300 ${theme === 'light' ? 'hover:bg-green-300/70' : 'hover:bg-green-200/20'
        }`}
    >
      <td className="px-3 py-4 font-medium">{category}</td>
      <td className="px-3 py-4">
        <img src={imageUrl} alt="tip" className="w-12 h-12 rounded shadow-md object-cover" />
      </td>
      <td className="px-3 py-4">{title}</td>
      <td className="px-3 py-4 text-right">
        <div className="flex justify-end gap-2">
          <button
            onClick={() => UpdateData(_id)}
            className="px-3 py-1 font-semibold rounded bg-yellow-300 hover:bg-yellow-400 text-black dark:bg-yellow-500 dark:text-black"
          >
            Update
          </button>
          <button
            onClick={() => deleteData(_id)}
            className="px-3 py-1 font-semibold rounded bg-red-600 hover:bg-red-700 text-white"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTipsBody;