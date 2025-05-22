import React, { useEffect, useState } from 'react';
import ActiveGardeners from '../Components/activeGardeners/ActiveGardeners';
import TrendingTips from '../Components/Tips/TrendingTips';
import Banner from '../Components/Banner/Banner';


const Home = () => {
  const [activeGardener, setActiveGardener] = useState([])
  useEffect(() => {
    fetch('https://assignment-10-server-virid-theta.vercel.app/active-gardeners')
      .then(res => res.json())
      .then(data => {
        setActiveGardener(data)
      })
  }, [])

  return (<>
    <Banner activeGardener={activeGardener} />

    <ActiveGardeners activeGardener={activeGardener} setActiveGardener={setActiveGardener} />
    <TrendingTips activeGardener={activeGardener} />
  </>);
};

export default Home;