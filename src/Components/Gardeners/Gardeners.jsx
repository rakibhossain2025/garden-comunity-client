import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import SingleRecent from './SingleRecent';
import { ThemeContext } from '../../Context/UserAuth';
import { toast, ToastContainer } from 'react-toastify';

const Gardeners = () => {
  const { theme } = useContext(ThemeContext)
  const gardeners = useLoaderData()
  const [recentPose, setRecentPost] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://assignment-10-server-virid-theta.vercel.app/tips/")
      .then(res => res.json())
      .then(data => setRecentPost(data))
  }, [])


  const handleRedirect = (a, i) => {
    if (a === "Public") {
      navigate(`/tip-details/${i}`, { state: i });
    } else {
      toast.error("This post is private or deleted")
    }

  }


  return (<>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ToastContainer position='top-center' autoClose={3000}></ToastContainer>
      <h2
        className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-[#52F757]' : ''
          }`}
      >
        🌿 Featured Gardeners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gardeners.map((gardener) => (
          <div
            key={gardener._id}
            className={`w-full relative rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden ${theme === 'dark' ? 'bg-gray-800 text-[#52F757]' : 'bg-white text-black'
              }`}
          >
            <span className={`absolute top-0 right-0 ${theme === 'dark' ? "text-white" : 'text-black'}  bg-green-600 px-4 rounded-bl-2xl py-1`}>{gardener.availability === "Hidden" ? "Private Post" : "Public Post"}</span>
            <div className="flex flex-col">
              <div className="w-full h-64">
                <img
                  src={gardener.imageUrl}
                  alt={gardener.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full p-5 space-y-2">
                <h2 className={`${theme === 'dark' && 'bg-gray-800 text-[#52F757]'}"text-2xl font-bold"`}>{gardener.title}</h2>
                <p className="mt-1 text-sm">
                  <strong>Tips:</strong> {gardener.tips}
                </p>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} space-y-1 mt-2`}>
                  <p>
                    <strong>User:</strong> {gardener.UserName} ({gardener.gender}, {gardener.age} yrs)
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
              <button onClick={() => handleRedirect(gardener.availability, gardener._id)} className={`btn w-full ${theme === "dark" ? "bg-[#256927]" : "bg-gray-600 text-white"}`}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <section className=" px-4 py-12">
      <h2
        className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-[#52F757]' : 'text-green-700'
          }`}
      >
        🔥 Top Trending Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentPose.map((tip, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 hover:shadow-lg transition shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
          >
            <h3 className={`text-2xl font-semibold ${theme === 'dark' && 'text-[#52F757]'} 0 mb-2`}>{tip.title}</h3>
            {
              tip.category && (
                <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-500'}`}>
                  Category: {tip.category}
                </p>
              )
            }
          </div>
        ))}
      </div>
    </section >

  </>)

};

export default Gardeners;

