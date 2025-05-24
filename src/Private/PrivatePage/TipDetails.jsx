import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ThemeContext } from '../../Context/UserAuth';

const TipDetails = () => {
  const location = useLocation()
  const { theme } = useContext(ThemeContext)
  const id = location?.state
  const [data, setData] = useState([])
  const [MyTipsLoader, setMyTipsLoader] = useState(true)

  useEffect(() => {
    fetch(`https://assignment-10-server-virid-theta.vercel.app/active-gardeners/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setMyTipsLoader(false)
      })
  }, [id])

  if (MyTipsLoader) return <Loading />

  return (
    <div className={`max-w-5xl my-12 mx-auto p-6 mt-10 rounded-2xl shadow-2xl transition duration-300
      ${theme === 'dark' ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-800'}`}>

      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div>
          <img
            src={data.imageUrl}
            alt={data.title}
            className="w-full h-72 object-cover rounded-xl shadow-md ring-2 ring-green-500/30"
          />
          <p className={`text-center font-semibold mt-4 text-lg italic
            ${theme === 'dark' ? 'text-green-200' : 'text-green-700'}`}>
            {data.description}
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400 mb-4">
            {data.title}
          </h2>

          <ul className="space-y-2 text-lg leading-relaxed">
            <li><span className="font-semibold">🌱 Category:</span> {data.category}</li>
            <li><span className="font-semibold">🌿 Plant Type:</span> {data.plantType}</li>
            <li><span className="font-semibold">⚙️ Difficulty:</span> {data.difficulty}</li>
            <li><span className="font-semibold">📈 Experience:</span> {data.experience}</li>
            <li><span className="font-semibold">📦 Availability:</span> {data.availability}</li>
            <li><span className="font-semibold">💡 Shared Tips:</span> {data.totalShareTips}</li>
            <li><span className="font-semibold">🎂 Age:</span> {data.age}</li>
            <li><span className="font-semibold">👤 Gender:</span> {data.gender}</li>
            <li><span className="font-semibold">📧 User:</span> {data.UserName} ({data.UserEmail})</li>
          </ul>

          <div className="mt-6">
            <p className="text-md font-medium mb-2">🌿 Pro Tip:</p>
            <div className={`p-4 rounded-xl shadow-inner transition
              ${theme === 'dark'
                ? 'bg-green-900 text-green-100'
                : 'bg-green-50 text-green-900'
              }`}>
              {data.tips}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;