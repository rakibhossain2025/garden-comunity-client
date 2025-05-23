import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const TipDetails = () => {
  const location = useLocation()
  const id = location?.state
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/active-gardeners/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [id])


  return (

    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white my-12 rounded-2xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <img
            src={data.imageUrl}
            alt={data.title}
            className="w-full h-72 object-cover rounded-xl shadow"
          />
          <p className="text-center font-bold mb-4 italic">{data.description}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-2">{data.title}</h2>
          <ul className="space-y-1 text-sm">
            <li><strong>Category:</strong> {data.category}</li>
            <li><strong>Plant Type:</strong> {data.plantType}</li>
            <li><strong>Difficulty:</strong> {data.difficulty}</li>
            <li><strong>Experience Level:</strong> {data.experience}</li>
            <li><strong>Availability:</strong> {data.availability}</li>
            <li><strong>Shared Tips:</strong> {data.totalShareTips}</li>
            <li><strong>Age:</strong> {data.age}</li>
            <li><strong>Gender:</strong> {data.gender}</li>
            <li><strong>User:</strong> {data.UserName} ({data.UserEmail})</li>
          </ul>
          <div className="mt-4">
            <p className="text-md font-medium text-gray-800 dark:text-white mb-1">🌿🌿🌿 Tip:</p>
            <p className="bg-green-50 dark:bg-green-800 text-green-900 dark:text-green-100 p-3 rounded-lg shadow">
              {data.tips}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;