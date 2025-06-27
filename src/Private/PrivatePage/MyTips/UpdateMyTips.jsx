import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { UserAuth } from '../../../Context/UserAuth';
import { toast, ToastContainer } from 'react-toastify';

const UpdateMyTips = () => {
  const { user } = useContext(UserAuth);
  const {
    availability,
    category,
    description,
    difficulty,
    imageUrl,
    plantType,
    title,
    _id,
  } = useLoaderData();

  const navigate = useNavigate();
  document.title = 'Gardening Community | Update Tips';

  const handleUpdateGardenTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGardenTip = Object.fromEntries(formData.entries());

    fetch(`https://assignment-10-server-virid-theta.vercel.app/tips/id/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGardenTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.modifiedCount) {
          toast.warning('Please make a change to update');
        } else {
          toast.success('Successfully updated');
          setTimeout(() => navigate('/my-tips'), 1000);
        }
      });
  };

return (
    <div
      className="py-12 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://media.istockphoto.com/id/497089632/photo/red-stamp-on-a-white-background-update.jpg?s=612x612&w=0&k=20&c=OVDvZZoXhUVPwsEjz88dEw0ctZ8OJkWo5fzj-40cPXI=)',
      }}
    >
      <div className="w-full max-w-4xl p-6 rounded-lg shadow-xl bg-white/90 dark:bg-[#1f1f26]/90 space-y-6">
        <h2 className="text-3xl font-bold text-center">Update Gardening Tip</h2>
        <ToastContainer position="top-center" autoClose={3000} />
        <form onSubmit={handleUpdateGardenTip} className="space-y-5">
          {/* Short Tip */}
          <div>
            <label className="block mb-1">Short Tip</label>
            <input
              type="text"
              name="shortTip"
              placeholder="Short tip (e.g., Use banana peels)"
              defaultValue={title}
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={title}
              required
            />
          </div>

          {/* Plant Type */}
          <div>
            <label className="block mb-1">Plant Type</label>
            <input
              type="text"
              name="plantType"
              placeholder="Plant Type"
              defaultValue={plantType}
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              defaultValue={imageUrl}
              required
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block mb-1">Difficulty</label>
            <select name="difficulty" defaultValue={difficulty} required>
              <option disabled>Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1">Category</label>
            <select name="category" defaultValue={category} required>
              <option disabled>Category</option>
              <option>Composting</option>
              <option>Plant Care</option>
              <option>Indoor Gardening</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-1">Availability</label>
            <select name="availability" defaultValue={availability} required>
              <option disabled>Availability</option>
              <option>Public</option>
              <option>Hidden</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Tip description"
              defaultValue={description}
              rows={4}
              required
            ></textarea>
          </div>

          {/* User Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">User Name</label>
              <input
                type="text"
                name="UserName"
                readOnly
                defaultValue={user?.displayName || 'Anonymous'}
                className="bg-gray-100 dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="block mb-1">User Email</label>
              <input
                type="email"
                name="UserEmail"
                readOnly
                defaultValue={user?.email || ''}
                className="bg-gray-100 dark:bg-gray-800"
              />
            </div>
          </div>

          <button type="submit">Update Tip</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyTips;
