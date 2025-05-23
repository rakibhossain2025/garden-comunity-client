import React from 'react';
import ActiveGardeners from '../Components/activeGardeners/ActiveGardeners';
import TrendingTips from '../Components/Tips/TrendingTips';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router';


const Home = () => {
  const loader =useLoaderData()
   console.log(loader)

  return (<>
    <Banner loader={loader} />

    <ActiveGardeners loader={loader}  />
    <TrendingTips loader={loader} />
  </>);
};

export default Home;