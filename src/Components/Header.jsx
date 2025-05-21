import React from 'react';
// import NavBer_Link from '../utility/NavBer_Link';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router';
import NavBer_Link from '../utility/NavBer_Link';
const Header = () => {
  const user = 0
  return (<>
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto navbar px-4 py-3 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-blue-700">RoomieFind</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium list-none">
          <NavBer_Link />
        </div>

        <div className="space-x-2 relative">
          {user ? (
            <div className="group relative cursor-pointer">
              <img
                src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                <p className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                  {user.displayName || "Unknown User"}
                </p>
                <button
                  // onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className='flex gap-2'>
              <Link to="/signin">
                <button className="btn btn-outline btn-primary px-6">signin</button>
              </Link>
              <Link to="/signup" className='lg:block hidden'>
                <button className="btn btn-outline btn-primary px-6">signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
  )
}
export default Header;


