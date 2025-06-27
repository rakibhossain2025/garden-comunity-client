import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { UserAuth } from '../Context/UserAuth';
import '../App.css'
const NavBer_Link = () => {
  const { user } = useContext(UserAuth);

  const linkClass =
    'text-xl px-3 py-1 transition duration-300 hover:text-green-500 tex-[#52F757]';

  const activeClass = 'font-bold underline text-green-600';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/explore-gardeners', label: 'Explore Gardeners' },
    { to: '/browse-tips', label: 'Browse Tips' },
    { to: '/about-us', label: 'About Us' },
  ];

  const userLinks = [
    { to: '/My-tips', label: 'My Tips' },
  ];

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ''}`
          }
        >
          {link.label}
        </NavLink>
      ))}

      {user &&
        userLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
    </div>
  );
};


export default NavBer_Link;