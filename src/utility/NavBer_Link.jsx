import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { UserAuth } from '../Context/UserAuth';
import '../App.css'
const NavBer_Link = () => {
  const { user } = useContext(UserAuth)
  return (
    <>
      <li className='list-none'> <NavLink to="/"
        className={({ isActive }) => isActive ? "text-blue-500 text-xl underline" : "hover:text-green-600 transition duration-300  text-xl "} >Home </NavLink></li>
      <li className='list-none'> <NavLink to="/explore-gardeners" className={({ isActive }) => isActive ? "text-blue-500 text-xl underline" : "hover:text-green-600 transition duration-300  text-xl "} >Explore Gardeners </NavLink></li >
      <li className='list-none'> <NavLink to="/browse-tips" className={({ isActive }) => isActive ? "text-blue-500 text-xl underline" : "hover:text-green-600 transition duration-300  text-xl "} >Browse Tips </NavLink></li>
      {user && <>
        <li className='list-none'> <NavLink to="/share-a-garden-tip" className={({ isActive }) => isActive ? "text-blue-500 text-xl underline" : "hover:text-green-600 transition duration-300  text-xl "} >Share a Garden Tip </NavLink></li>
        <li className='list-none'> <NavLink to="/My-tips" className={({ isActive }) => isActive ? "text-blue-500 text-xl underline" : "hover:text-green-600 transition duration-300  text-xl "} >My Tips </NavLink></li>
      </>}
    </>
  );
};

export default NavBer_Link;