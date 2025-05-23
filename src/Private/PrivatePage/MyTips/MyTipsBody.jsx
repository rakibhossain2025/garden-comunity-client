import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyTipsBody = ({ singleTip, myTips, setMyTips }) => {

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
    <tr className="border-b hover:bg-green-200 dark:text-[#00ff07] dark:bg-[#000000] border-opacity-20 dark:border-gray-300 dark:bg-gray-50 ">
      <td className="px-3 py-6">
        <p>{category}</p>
      </td>
      <td className="px-3 py-4">
        <img src={imageUrl} className='w-10 h-10 ' />
      </td>
      <td className="px-3 py-6">
        <p>{title}</p>
      </td>
      <td className="p-2">
        <div className='flex justify-end flex-row items-center space-x-2 h-full'>
          <button onClick={() => UpdateData(_id)} className="px-3 py-1 cursor-pointer font-semibold rounded-md dark:bg-green-700 dark:text-gray-500 ">Update</button>
          <button onClick={() => deleteData(_id)} className="px-3 py-1 cursor-pointer font-semibold rounded-md dark:bg-red-600 dark:text-gray-50 ">Delete</button>
        </div>
      </td>

    </tr>
  );
};

export default MyTipsBody;