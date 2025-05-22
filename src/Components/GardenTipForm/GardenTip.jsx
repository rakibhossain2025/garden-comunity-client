import { useContext } from "react";
import { UserAuth } from "../../Context/UserAuth";
import Swal from "sweetalert2";

const GardenTip = () => {
  const { user } = useContext(UserAuth)

  console.log(user)

  const handleGardenTips = (e) => {
    e.preventDefault()
    const popUpTitle = e.target.title.value
    const formData = Object.fromEntries(new FormData(e.target).entries())
    console.log(formData)
    fetch('http://localhost:5000/tips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: `${popUpTitle}`,
            text: "Post Successfully ",
            icon: "success",
            draggable: false,
            timer: 1500, showConfirmButton: false,
          });
          e.target.reset()
          console.log('success', data)
        }
      })
  }
  return (<>
    <div className="max-w-3xl mb-4 mx-auto p-6 mt-10 bg-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">
        Share Your Garden Tips
      </h2>
      <form onSubmit={handleGardenTips} className="space-y-4">
        <label className="relative">Title <span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <input
          type="text"
          name="title"
          placeholder="Title (e.g., How I Grow Tomatoes Indoors)"
          className="w-full outline-none p-2 border border-green-600 rounded"
          required
        />
        <label className="relative">plantType<span className="text-red-500 absolute -right-2 text-xl">*</span></label>

        <input
          type="text"
          name="plantType"
          placeholder="Plant Type or Topic"
          className="w-full outline-none p-2 border border-green-600 rounded"
          required
        />
        <label className="relative">Photo Url<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          className="w-full outline-none p-2 border border-green-600 rounded"
          required
        />
        <label className="relative">Difficulty<span className="text-red-500 absolute -right-2 text-xl">*</span> </label>
        <select
          name="difficulty"
          className="w-full p-2 border border-green-600 rounded"
          required
        >
          <option value="" selected disabled>
            Difficulty Level
          </option>
          <option >Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <label className="relative">Description <span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <select
          required
          name="category"
          className="w-full p-2 border border-green-600 rounded"
        >
          <option selected disabled>
            Category
          </option>
          <option >Composting</option>
          <option>Plant Care</option>
          <option>Indoor Gardening</option>
        </select>

        <label className="relative">Description <span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <select
          name="availability"
          className="w-full p-2 border border-green-600 rounded"
          required
        >
          <option selected disabled>
            Visibility
          </option>
          <option >Public</option>
          <option>Hidden</option>
        </select>
        <label className="relative">Description<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
        <textarea
          name="description"
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
              value={user?.displayName || "Name Not Found"}
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
              value={user?.email || ""}
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
  </>);
};

export default GardenTip;
