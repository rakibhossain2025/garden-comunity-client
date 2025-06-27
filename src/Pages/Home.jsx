import React, { useEffect, useState } from 'react';
import ActiveGardeners from '../Components/activeGardeners/ActiveGardeners';
import TrendingTips from '../Components/Tips/TrendingTips';
import Banner from '../Components/Banner/Banner';
import Loading from '../Components/Loading';
import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter';
import Title from '../Components/Shared/Title';
import Popular from '../Components/Popular/Popular';

const Home = () => {
  const [loader, setLoader] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  document.title = 'Gardening Community';

  useEffect(() => {
    window.scrollTo(0, 0);
    const successMessage = location.state?.successMessage;
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [location.state]);

  useEffect(() => {
    fetch("https://assignment-10-server-virid-theta.vercel.app/active-gardener")
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

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      <Banner />

      <ActiveGardeners loader={loader} />

      <Popular />

      {/* tips */}
      <h3 className='text-2xl mt-18 lg:text-5xl text-center font-bold '>
        <Typewriter
          words={["Top Trending Tips", "Hot Gardening Ideas", "New Eco-Friendly Hacks"]}
          loop={true}
          cursor
          cursorStyle=":)"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h3>
      <TrendingTips loader={loader} />


      <div className="px-4 mb-12">
        <Title text={'Gardening Tips of the Day'} />
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li
              key={index}
              className="p-5 rounded-xl shadow-sm border-l-4 transition duration-300 bg-white border-green-500 text-green-700"
            >
              <p className="font-medium">{tip}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
