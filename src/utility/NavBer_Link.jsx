import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { UserAuth } from '../Context/UserAuth';
import '../App.css'
const NavBer_Link = () => {
  const { user } = useContext(UserAuth)
  return (
    <>
      <li> <NavLink to="/" className="hover:text-green-600 transition duration-300  " >Home </NavLink></li>
      <li> <NavLink to="/explore-gardeners" className="hover:text-green-600 transition duration-300 " >Explore Gardeners </NavLink></li >
      <li> <NavLink to="/browse-tips" className="hover:text-green-600 transition duration-300 " >Browse Tips </NavLink></li>
      {user && <>
        <li> <NavLink to="/share-a-garden-tip" className="hover:text-green-600 transition duration-300 " >Share a Garden Tip </NavLink></li>
        <li> <NavLink to="/My-tips" className="hover:text-green-600 transition duration-300 relative group" >My Tips </NavLink></li>
      </>}
    </>
  );
};

export default NavBer_Link;