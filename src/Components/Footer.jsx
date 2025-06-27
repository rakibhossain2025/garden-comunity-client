import NavBer_Link from '../utility/NavBer_Link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from './Shared/Logo';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer
      className="py-10 px-4 sm:px-10 dark:bg-black/50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Logo />
          <p className="text-sm mt-2">
            GardenHub is a community-driven platform connecting gardening lovers to share tips, join events, and grow together.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Link</h2>
          <ul className="text-sm flex flex-col gap-3 space-y-2">
            <NavBer_Link />
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <ul className="text-sm space-y-2">
            <Link to='/faq' className="hover:underline">Faq</Link>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-green-300"><FaFacebook className='text-blue-600' /></a>
            <a href="#" aria-label="Instagram" className="hover:text-green-300"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-green-300"><FaYoutube className='text-red-500' /> </a>
          </div>
          <p className="mt-4 text-sm">© {new Date().getFullYear()} GardenHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;