import React from 'react';
import { Link } from 'react-router';

const NavBer_Link = () => {
  return (
    <>
      <li><Link to={'/'}>Home </Link></li>
      <li><Link to={'/explore-gardeners'}>Explore Gardeners</Link></li>
      <li><Link to={'/browse-tips'}>Browse Tips </Link></li>
      <li><Link to={'/share-a-garden-tip'}>Share a Garden Tip</Link></li>
      <li><Link to={'/My-tips'}> My Tips</Link></li>
    </>
  );
};

export default NavBer_Link;