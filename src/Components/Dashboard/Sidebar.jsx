import React from 'react';
import { NavLink } from 'react-router'
import Logo from '../Shared/Logo';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col">
      <div className="mb-10">
        <Logo />
      </div>
      <nav className="flex flex-col space-y-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-md text-lg font-semibold transition-colors
            hover:bg-gray-700 hover:text-green-400
            ${isActive ? 'bg-green-700 text-green-300' : 'text-gray-300'}`
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard/share-tip"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-md text-lg font-semibold transition-colors
            hover:bg-gray-700 hover:text-green-400
            ${isActive ? 'bg-green-700 text-green-300' : 'text-gray-300'}`
          }
        >
          Share a Tip
        </NavLink>
      </nav>
      <div className="mt-auto text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Gardening Community
      </div>
    </div>
  );
};

export default Sidebar;
