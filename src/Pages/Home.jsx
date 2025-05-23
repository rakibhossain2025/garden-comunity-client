import React, { useEffect, useState } from 'react';
import ActiveGardeners from '../Components/activeGardeners/ActiveGardeners';
import TrendingTips from '../Components/Tips/TrendingTips';
import Banner from '../Components/Banner/Banner';
import Loading from '../Components/Loading';
import ExtraSection from './ExtraSection';


const Home = () => {
  const [loader, setLoader] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-10-server-virid-theta.vercel.app/active-gardeners")
      .then(res => res.json())
      .then((data) => {
        setLoader(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  return (<>
    <Banner />
    {/* <ActiveGardeners loader={loader} /> */}
    <ExtraSection />
    <h3 className='text-xl lg:text-5xl text-center font-bold '>Top Trending Tips </h3>
    <TrendingTips loader={loader} />

    <div className="max-w-5xl mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🌿 Gardening Tips of the Day</h2>
      <ul className="space-y-4">
        <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-green-700 font-medium">💧 Water early in the morning to reduce evaporation and help roots absorb better.</p>
        </li>
        <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-green-700 font-medium">🌻 Deadhead flowers regularly to promote more blooming.</p>
        </li>
        <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-green-700 font-medium">🍃 Use banana peels and eggshells as natural fertilizers in your garden beds.</p>
        </li>
        <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-green-700 font-medium">🌾 Mulch around plants to retain moisture and reduce weeds.</p>
        </li>
      </ul>
    </div>
  </>);
};

export default Home;