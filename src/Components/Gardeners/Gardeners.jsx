import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleRecent from './SingleRecent';

const Gardeners = () => {
  const gardeners = useLoaderData()
  const [recentPose, setRecentPost] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/tips")
      .then(res => res.json())
      .then(data => setRecentPost(data))
  }, [])

  return (
    <div className="max-w-7xl space-y-12 mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold  text-center text-green-600">🌿 Explore Gardeners</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {gardeners.map(gardener => (
          <div
            key={gardener._id}
            className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
          >
            <img
              src={gardener.imageUrl}
              alt={gardener.title}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
            <div className="p-4 flex flex-col flex-grow justify-between space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-green-700">{gardener.UserName}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{gardener.description}</p>
                <ul className="text-sm text-gray-700 dark:text-gray-400 mt-2 space-y-1">
                  <li><strong>Age:</strong> {gardener.age}</li>
                  <li><strong>Gender:</strong> {gardener.gender}</li>
                  <li><strong>Status:</strong> {gardener.status ? 'Active' : 'Inactive'}</li>
                  <li><strong>Experience:</strong> {gardener.experience}</li>
                  <li><strong>Tips:</strong> {gardener.totalShareTips}</li>
                </ul>
              </div>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                View Tip
              </button>
            </div>
          </div>
        ))}
      </div>
      {recentPose && <>
        <h2>Recently Added</h2>
        <div>

          {recentPose.map(recent => (
            <SingleRecent key={recent._id} recent={recent} />
          ))}

        </div>
      </>}
    </div>
  );
};

export default Gardeners;