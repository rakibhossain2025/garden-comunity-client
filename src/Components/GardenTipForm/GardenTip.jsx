import { useContext, useState } from "react";
import { UserAuth } from "../../Context/UserAuth";
import Swal from "sweetalert2";

const GardenTip = () => {
  const { user } = useContext(UserAuth);
  const [post, setPost] = useState(false)


  const handleGardenTips = (e) => {
    e.preventDefault();
    const popUpTitle = e.target.title.value;
    const formData = Object.fromEntries(new FormData(e.target).entries());

    const datas = {
      ...formData,
      userImg:user.photoURL,
      experience: "Advanced",
      totalShareTips: 0,
      totalLiked: 0
    }
    fetch('http://loalhost:5000/tip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datas)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setPost(true)
          Swal.fire({
            title: `${popUpTitle}`,
            text: "Post Successfully",
            icon: "success",
            draggable: false,
            timer: 1500,
            showConfirmButton: false,
          });
          e.target.reset();
        }
      })
    setPost(false);
  };


  return (
    <>
      <div
        className="bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}
      >
        <div className="w-full max-w-3xl p-6 bg-white bg-opacity-80 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Share Your Garden Tips</h2>

          <form onSubmit={handleGardenTips} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Title
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title (e.g., How I Grow Tomatoes Indoors)"

                required
              />
            </div>

            {/* Plant Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Plant Type
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="plantType"
                placeholder="Plant Type or Topic"

                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Photo URL
                <span className="text-red-500">*</span>
                <span className="text-sm text-green-400">(e.g. myphoto.com)</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"

                required
              />
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Difficulty
                <span className="text-red-500">*</span>
              </label>
              <select name="difficulty" required>
                <option disabled selected>Difficulty Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Category
                <span className="text-red-500">*</span>
              </label>
              <select name="category" required>
                <option disabled selected>Category</option>
                <option>Composting</option>
                <option>Plant Care</option>
                <option>Indoor Gardening</option>
              </select>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Visibility
                <span className="text-red-500">*</span>
              </label>
              <select name="availability" required>
                <option disabled selected>Visibility</option>
                <option>Public</option>
                <option>Hidden</option>
              </select>
            </div>

            {/* short tips */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Short Tip
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="shortTip"
                placeholder="Share a short tip"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter your Garden Tip Description"
                className={` min-h-24`}
                rows={6}
                required
              />
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">User Name</label>
                <input
                  type="text"
                  name="UserName"
                  defaultValue={user?.displayName || "Name Not Found"}
                  readOnly
                  className={` bg-gray-100`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">User Email</label>
                <input
                  type="email"
                  name="UserEmail"
                  defaultValue={user?.email || ""}
                  readOnly
                  className={` bg-gray-100`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
              {post ? 'Share Tip' : "sharing"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GardenTip;
