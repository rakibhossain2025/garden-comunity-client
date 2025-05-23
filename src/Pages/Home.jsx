import React, { useEffect, useState } from 'react';
import ActiveGardeners from '../Components/activeGardeners/ActiveGardeners';
import TrendingTips from '../Components/Tips/TrendingTips';
import Banner from '../Components/Banner/Banner';
import Loading from '../Components/Loading';


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
    <Banner loader={loader} />
    <ActiveGardeners loader={loader} />
    <TrendingTips loader={loader} />
  </>);
};

export default Home;