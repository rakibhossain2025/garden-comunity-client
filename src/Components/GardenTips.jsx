import { useContext } from "react";
import { UserAuth } from "../Context/UserAuth";
import Swal from "sweetalert2";

const GardenTips = () => {
  const { name } = useContext(UserAuth)
  console.log(name)


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
    <div className='lato-regular'>
      <h1 className="text-xl text-center font-bold lg:text-4xl">Share a Garden Tip</h1>
      <form className='border flex flex-col gap-4 ' onSubmit={handleGardenTips}>
        {/* User Email & Name (read-only). The user can’t edit this field. */}
        <input placeholder='title' type="text" className='border px-2 py-4 mx-4' name="title" />
        <input placeholder='type' type="text" className='border px-2 py-4 mx-4' name="type" />
        <input placeholder='Img url' type="text" className='border px-2 py-4 mx-4' name="ImagesUrl" />
        <input placeholder='Category' type="text" className='border px-2 py-4 mx-4' name="Category" />
        <input placeholder='Availability' type="text" className='border px-2 py-4 mx-4' name="Availability" />
        <input placeholder='DifficultyLevel' type="text" className='border px-2 py-4 mx-4' name="DifficultyLevel" />
        <input placeholder='Description' type="text" className='border px-2 py-4 mx-4' name="Description" />
        <input type="submit" className='btn' name="text2" value="submit " />
      </form>
      </div>
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add a Listing
      </h2>
      <form  className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="rent"
          placeholder="Rent Amount"
          className="input input-bordered w-full"
          required
        />
        <select
          name="roomType"
          className="select select-bordered w-full"
          required
        >
          <option disabled value="">
            Room Type
          </option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>
        <select
          name="lifestylePreferences"
          className="select select-bordered w-full"
          required
        >
          <option disabled value="">
            Lifestyle Preferences
          </option>
          <option value="Pets">Pets</option>
          <option value="Smoking">Smoking</option>
          <option value="Night Owl">Night Owl</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows={5}
          required
        ></textarea>
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info"
          className="input input-bordered w-full"
          required
        />
        <select
          name="availability"
          className="select select-bordered w-full"
          required
        >
          <option disabled value="">
            Availability
          </option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        <input
          type="email"
          name="userEmail"
          // defaultValue={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100 text-gray-600"
        />
        <input
          type="text"
          name="userName"
          // defaultValue={user?.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100 text-gray-600"
        />
        <button
          type="submit"
          className="btn btn-primary w-full uppercase tracking-wide"
        >
          Add
        </button>
      </form>
    </div>
  </>);
};

export default GardenTips;
