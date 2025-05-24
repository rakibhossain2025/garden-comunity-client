import React, { useContext } from 'react';
import NavBer_Link from '../utility/NavBer_Link';
import { ThemeContext } from '../Context/UserAuth';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <footer
      className={`py-10 px-4 sm:px-10 ${theme === "dark"
        ? "bg-black text-white"
        : "bg-white text-green-900 border-t"
        }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-3">About GardenHive</h2>
          <p className="text-sm">
            GardenHub is a community-driven platform connecting gardening lovers to share tips, join events, and grow together.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Link</h2>
          <ul className="text-sm space-y-2">
            <NavBer_Link />
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Resources</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Composting</a></li>
            <li><a href="#" className="hover:underline">Hydroponics</a></li>
            <li><a href="#" className="hover:underline">Balcony Gardening</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-green-300"><FaFacebook className='text-blue-600' /></a>
            <a href="#" aria-label="Instagram" className="hover:text-green-300"><FaInstagram/></a>
            <a href="#" aria-label="YouTube" className="hover:text-green-300"><FaYoutube className='text-red-500' /> </a>
          </div>
          <p className="mt-4 text-sm">© {new Date().getFullYear()} GardenHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;