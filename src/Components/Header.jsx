import React from 'react';
import { Link } from 'react-router';
import NavBer_Link from '../utility/Navber_Link';
const Header = () => {
  return (
    <header className="container flex justify-between py-4 items-center bg-gray-200 mx-auto">

        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <img src="https://i.ibb.co/" alt="" />
        </a>
        <ul className="items-stretch hidden gap-4 lg:flex">
          <NavBer_Link />
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
    </header>
  );
};

export default Header;