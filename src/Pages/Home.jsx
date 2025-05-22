import React, { useEffect, useState } from 'react';
import ActiveGardeners from '../Components/activeGardeners/ActiveGardeners';
import TrendingTips from '../Components/Tips/TrendingTips';

const Home = () => {
  const [allTips, setAllTips] = useState()
  useEffect(() => {
    fetch('http://localhost:5000/tips')
      .then(res => res.json())
      .then(data => setAllTips(data))
  }, [])

  return (<>
    <ActiveGardeners />
    <TrendingTips allTips={allTips}  />
  </>);
};

export default Home;