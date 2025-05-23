import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { UserAuth } from '../../../Context/UserAuth';

const UpdateMyTips = () => {
  const { user } = useContext(UserAuth)
  const { availability, category, description, difficulty, imageUrl, plantType, title, _id } = useLoaderData()

  const handleUpdateGardenTip = e => {
    e.preventDefault()
    const form = e.target
    const fromData = new FormData(form)
    const UpdateGardenTip = Object.fromEntries(fromData.entries())

    fetch(`https://assignment-10-server-virid-theta.vercel.app/tips/id/${_id}`, {
      method: "PUT",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(UpdateGardenTip)
    }).then(res => res.json())
      .then(data => {
        if (data.modifiedCount === 0 || data.modifiedCount < 0) {
          alert("please change for update")
        } else{
          
          alert("success for change for update")
        }
      })

  }
  return (
    <div className="max-w-3xl mb-4 mx-auto p-6 mt-10 bg-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">
        Share Your Garden Tips
      </h2>
      <form onSubmit={handleUpdateGardenTip} className="space-y-4">
        <label className="relative">Title <span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder="Title (e.g., How I Grow Tomatoes Indoors)"
          className="w-full outline-none p-2 border border-green-600 rounded"
          required
        />
        <label className="relative">plantType<span className="text-red-500 absolute -right-2 text-xl">*</span></label>

        <input
          type="text"
          name="plantType"
          defaultValue={plantType}
          placeholder="Plant Type or Topic"
          className="w-full outline-none p-2 border border-green-600 rounded"
          required
        />
        <label className="relative">Photo Url<span className="text-red-500 absolute -right-2 text-xl">*</span >
          <span className="text-sm ml-2 text-green-700">(Example: myphoto.com)</span>
        </label>
        <input
          type="text"
          name="imageUrl"
          defaultValue={imageUrl}
          placeholder="Image URL"
          pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
          className="w-full outline-none p-2 border border-green-600 rounded"
          required
        />
        <label className="relative">Difficulty<span className="text-red-500 absolute -right-2 text-xl">*</span> </label>
        <select
          name="difficulty"
          defaultValue={difficulty || ""}
          className="w-full p-2 border border-green-600 rounded"
          required
        >
          <option disabled value="">Difficulty Level</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <label className="relative">Description <span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <select
          required
          defaultValue={category || ""}
          name="category"
          className="w-full p-2 border border-green-600 rounded"
        >
          <option disabled value="">Category</option>
          <option value="Composting">Composting</option>
          <option value="Plant Care">Plant Care</option>
          <option value="Indoor Gardening">Indoor Gardening</option>
        </select>

        <label className="relative">Description <span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <select
          name="availability"
          defaultValue={availability || ""}
          className="w-full p-2 border border-green-600 rounded"
          required
        >
          <option disabled value="">Visibility</option>
          <option value="Public">Public</option>
          <option value="Hidden">Hidden</option>
        </select>
        <label className="relative">Description<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <textarea
          name="description"
          defaultValue={description}
          placeholder="Enter  your Garden Tip Description"
          className="w-full outline-none min-h-24 p-2 border border-green-600 rounded"
          rows={10}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <div>

            <label className="relative">User Name <span className="text-[10px] absolute -right-12 text-red-600">read Only</span> </label>
            <input
              type="text"
              defaultValue={user?.displayName || "Name Not Found"}
              readOnly
              className={`${user?.displayName ? '' : "border-red-400 text-red-500"} w-full outline-none p-2 border rounded bg-gray-100`}
              placeholder="User Name"
              name="UserName"
            />
          </div>
          <div>

            <label className="relative">User Email <span className="text-[10px] absolute -right-12 text-red-600">read Only</span> </label>
            <input
              type="email"
              defaultValue={user?.email || ""}
              readOnly
              className="w-full outline-none p-2 border border-green-600 rounded bg-gray-100"
              name="UserEmail"
              placeholder="User Email"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Share Tip
        </button>
      </form>
    </div>
  );
};

export default UpdateMyTips;