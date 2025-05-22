import React, { useContext, useEffect, useRef, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router';
import NavBer_Link from '../utility/NavBer_Link';
import { UserAuth } from '../Context/UserAuth';
const Header = ({ SetSwitchDOL, switchDOL }) => {
  const { user, handleSignOut } = useContext(UserAuth)

  const [dropdown, setDropDown] = useState(false)
  const dropdownClose = useRef(null)

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownClose.current && !dropdownClose.current.contains(e.target)) {
        setDropDown(false)
      }
    }
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [])


  const handleLogout = () => {
    handleSignOut()
  }


  return (<>
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto navbar px-4 py-3 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512968/5968705.png"
            alt="logo nor found"
            className="w-10 h-10"

          />
          <span onClick={() => SetSwitchDOL(!switchDOL)} className="text-2xl font-bold text-blue-700">Garden</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium list-none">
          <NavBer_Link />
        </div>

        <div className="space-x-2 relative">
          {user ? (
            <div className="relative cursor-pointer">
              <img
                src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                alt="profile"
                onClick={() => { setDropDown(!dropdown) }}
                className="w-10 h-10 rounded-full cursor-pointer border hover:ring-2 hover:ring-blue-500 transition duration-200"
              />
              {
                dropdown ?
                  <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md z-50 p-2" ref={dropdownClose}>
                    <p className="text-sm text-gray-700 mb-2">Hi, {user.name ? user.name : 'Rakib'}</p>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >Logout</button>
                  </div> : ''
              }
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
    </div >
  </>
  )
}
export default Header;


