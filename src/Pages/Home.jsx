import React, { useContext, useEffect, useState } from 'react';
import ActiveGardeners from '../Components/activeGardeners/ActiveGardeners';
import TrendingTips from '../Components/Tips/TrendingTips';
import Banner from '../Components/Banner/Banner';
import Loading from '../Components/Loading';
import ExtraSection from './ExtraSection';
import { ThemeContext } from '../Context/UserAuth';
import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';


const Home = () => {
  const [loader, setLoader] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
    const successMessage = location.state?.successMessage;
    if (successMessage) {
      toast.success(successMessage);
    }
  });
  useEffect(() => {
    fetch("https://assignment-10-server-virid-theta.vercel.app/active-gardeners")
      .then(res => res.json())
      .then((data) => {
        setLoader(data);
        setLoading(false);
      });
  }, []);


  const tips = [
    "💧 Water early in the morning to reduce evaporation and help roots absorb better.",
    "🌻 Deadhead flowers regularly to promote more blooming.",
    "🍃 Use banana peels and eggshells as natural fertilizers in your garden beds.",
    "🌾 Mulch around plants to retain moisture and reduce weeds.",
  ];

  if (loading) return <Loading />;
  return (<>
    <ToastContainer position="top-center" autoClose={3000} />
    <Banner />
    <ActiveGardeners loader={loader} />
    <h3 className='text-xl lg:text-5xl text-center font-bold my-12'>Top Trending Tips </h3>
    <TrendingTips loader={loader} />
    <ExtraSection />
    <div className="px-4 mb-12">
      <h2 className={`text-3xl font-bold mb-6 text-center transition duration-300 ${theme === 'light' ? 'text-black' : 'text-[#52f757]'}`}>
        🌿 Gardening Tips of the Day
      </h2>
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li
            key={index}
            className={`p-5 rounded-xl shadow-sm border-l-4 transition duration-300 
              ${theme === 'light' ? 'bg-white border-green-500 text-green-700' : 'bg-[#2C2C33] border-[#52f757] text-[#52f757]'}`}
          >
            <p className="font-medium">{tip}</p>
          </li>
        ))}
      </ul>
    </div>
  </>);
};

export default Home;