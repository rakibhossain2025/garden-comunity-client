import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleRecent from './SingleRecent';

const Gardeners = () => {
  const gardeners = useLoaderData()
  const [recentPose, setRecentPost] = useState([])
  const activeGardeners = gardeners.filter(gardener => gardener.availability !== "Hidden");

  useEffect(() => {
    fetch("https://assignment-10-server-virid-theta.vercel.app/tips/")
      .then(res => res.json())
      .then(data => setRecentPost(data))
  }, [])

  return (<>

    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">🌿 Featured Gardeners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {activeGardeners.map(gardener => (
          <div
            key={gardener._id}
            className="w-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="flex flex-col">
              {/* Image Section */}
              <div className="w-full h-64">
                <img
                  src={gardener.imageUrl}
                  alt={gardener.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full p-5 space-y-2">
                <h2 className="text-2xl font-bold text-green-800">{gardener.title}</h2>
                <p className="text-sm text-gray-600">{gardener.description}</p>
                <p className="mt-1 text-sm">
                  <strong>Tips:</strong> {gardener.tips}
                </p>
                <div className="text-sm text-gray-500 space-y-1 mt-2">
                  <p>
                    <strong>User:</strong> {gardener.UserName} ({gardener.gender},{" "}
                    {gardener.age} yrs)
                  </p>
                  <p>
                    <strong>Plant Type:</strong> {gardener.plantType}
                  </p>
                  <p>
                    <strong>Experience:</strong> {gardener.experience}
                  </p>
                  <p>
                    <strong>Difficulty:</strong> {gardener.difficulty}
                  </p>
                  <p>
                    <strong>Total Tips Shared:</strong> {gardener.totalShareTips}
                  </p>
                </div>
              </div>
            </div>
          </div>




        ))}
      </div>
    </div>

    {/* recently added  */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">🔥 Top Trending Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentPose.map((tip, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-800 mb-2">{tip.title}</h3>
            <p className="text-gray-600 text-sm">{tip.description}</p>
            {tip.category && (
              <p className="text-xs mt-2 text-green-500">Category: {tip.category}</p>
            )}
          </div>
        ))}
      </div>
    </section>

  </>)

};

export default Gardeners;



// return (
// <div className="max-w-7xl space-y-12 mx-auto px-4 py-10">
//   <h2 className="text-3xl font-bold  text-center text-green-600">🌿 Explore Gardeners</h2>


//   <div className="p-4 flex flex-wrap justify-center gap-6">
//     {gardeners.map(user => (
//       <div key={user._id}
//         className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
//       >
//         <img src={user.imageUrl} alt={user.title} className="w-full h-48 object-cover rounded-xl mb-3" />
//         <h2 className="text-xl font-bold text-green-800">{user.title}</h2>
//         <p className="text-sm text-gray-600">{user.description}</p>
//         <p className="mt-2 text-sm"><strong>Tips:</strong> {user.tips}</p>
//         <div className="mt-3 text-sm text-gray-500">
//           <p><strong>User:</strong> {user.UserName} ({user.gender}, {user.age} yrs)</p>
//           <p><strong>Plant Type:</strong> {user.plantType}</p>
//           <p><strong>Experience:</strong> {user.experience}</p>
//           <p><strong>Difficulty:</strong> {user.difficulty}</p>
//           <p><strong>Total Tips Shared:</strong> {user.totalShareTips}</p>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* <div className="flex flex-wrap justify-center gap-6">
//     {gardeners.map(gardener => (
//       <div
//         key={gardener._id}
//         className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
//       >
//         <img
//           src={gardener.imageUrl}
//           alt={gardener.title}
//           className="h-48 w-full object-cover rounded-t-2xl"
//         />
//         <div className="p-4 flex flex-col flex-grow justify-between space-y-2">
//           <div>
//             <h3 className="text-xl font-semibold text-green-700">{gardener.UserName}</h3>
//             <p className="text-sm text-gray-600 dark:text-gray-300">{gardener.description}</p>
//             <ul className="text-sm text-gray-700 dark:text-gray-400 mt-2 space-y-1">
//               <li><strong>Age:</strong> {gardener.age}</li>
//               <li><strong>Gender:</strong> {gardener.gender}</li>
//               <li><strong>Status:</strong> {gardener.status ? 'Active' : 'Inactive'}</li>
//               <li><strong>Experience:</strong> {gardener.experience}</li>
//               <li><strong>Tips:</strong> {gardener.totalShareTips}</li>
//             </ul>
//           </div>
//           <button onClick={() => { singleData(gardener._id) }} className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
//             View Tip
//           </button>
//         </div>
//       </div>




//     ))}
//   </div> */}
//   {
//     recentPose && <>
//       <h2>Recently Added</h2>
//       <div>

//         {recentPose.map(recent => (
//           <SingleRecent key={recent._id} recent={recent} />
//         ))}

//       </div>
//     </>
//   }
// </div >
// );