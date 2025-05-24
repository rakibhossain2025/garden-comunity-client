import { useContext } from "react";
import { ThemeContext, UserAuth } from "../../Context/UserAuth";
import Swal from "sweetalert2";

const GardenTip = () => {
  const { user } = useContext(UserAuth)
  const { theme } = useContext(ThemeContext)
  const handleGardenTips = (e) => {
    e.preventDefault()
    const popUpTitle = e.target.title.value
    const formData = Object.fromEntries(new FormData(e.target).entries())
    console.log(formData)
    fetch('https://assignment-10-server-virid-theta.vercel.app/tips', {
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


  const inputStyle = `w-full outline-none p-2 border rounded transition duration-300 ${theme === 'light'
    ? 'border-green-600 bg-white text-black'
    : 'border-[#52f757] bg-[#1f1f26] text-white placeholder:text-gray-400'
    }`;

  return (<>
    <div
      className={`max-w-3xl mx-auto p-6 mb-10 mt-10 rounded-xl shadow-xl transition duration-300 ${theme === 'light' ? 'bg-white text-black' : 'bg-[#2C2C33] text-white'
        }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">🌱 Share Your Garden Tips</h2>

      <form onSubmit={handleGardenTips} className="space-y-4">
        <div>
          <label className="relative">Title<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
          <input
            type="text"
            name="title"
            placeholder="Title (e.g., How I Grow Tomatoes Indoors)"
            className={inputStyle}
            required
          />
        </div>

        <div>
          <label className="relative">Plant Type<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
          <input
            type="text"
            name="plantType"
            placeholder="Plant Type or Topic"
            className={inputStyle}
            required
          />
        </div>

        <div>
          <label className="relative">
            Photo URL <span className="text-red-500 absolute -right-2 text-xl">*</span>
            <span className="text-sm ml-2 text-green-400">(Example: myphoto.com)</span>
          </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
            className={inputStyle}
            required
          />
        </div>

        <div>
          <label className="relative">Difficulty<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
          <select name="difficulty" className={inputStyle} required>
            <option disabled selected>Difficulty Level</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className="relative">Category<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
          <select name="category" className={inputStyle} required>
            <option disabled selected>Category</option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Indoor Gardening</option>
          </select>
        </div>

        <div>
          <label className="relative">Visibility<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
          <select name="availability" className={inputStyle} required>
            <option disabled selected>Visibility</option>
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        <div>
          <label className="relative">Description<span className="text-red-500 absolute -right-2 text-xl">*</span></label>
          <textarea
            name="description"
            placeholder="Enter your Garden Tip Description"
            className={`${inputStyle} min-h-24`}
            rows={6}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="relative">User Name <span className="text-[10px] absolute -right-12 text-red-600">read only</span></label>
            <input
              type="text"
              name="UserName"
              defaultValue={user?.displayName || "Name Not Found"}
              readOnly
              className={`${inputStyle} bg-gray-100 dark:bg-[#3d3d48] ${!user?.displayName ? "border-red-400 text-red-500" : ""}`}
            />
          </div>
          <div>
            <label className="relative">User Email <span className="text-[10px] absolute -right-12 text-red-600">read only</span></label>
            <input
              type="email"
              name="UserEmail"
              defaultValue={user?.email || ""}
              readOnly
              className={`${inputStyle} bg-gray-100 dark:bg-[#3d3d48]`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          🌼 Share Tip
        </button>
      </form>
    </div>
  </>);
};

export default GardenTip;
