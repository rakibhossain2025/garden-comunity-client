import React, { useContext, useEffect, useRef, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router';
import NavBer_Link from '../utility/NavBer_Link';
import { ThemeContext, UserAuth } from '../Context/UserAuth';
import { MdNightsStay } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const { user, handleSignOut } = useContext(UserAuth)
  console.log(user)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [dropdown, setDropDown] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const dropdownClose = useRef(null)
  const [dbUser, setDbUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://assignment-10-server-virid-theta.vercel.app/users/email/${user.email}`);
        const data = await res.json()
        setDbUser(data[0]);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    if (user?.email) {
      fetchUser();
    }
  }, [user?.email]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownClose.current && !dropdownClose.current.contains(e.target)) {
        setDropDown(false)
      }
    }
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setDropDown(false);
        setMobileMenu(false);
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
  const btnData = [
    {
      id: 1,
      name: "sign In",
      path: "/signin"
    },
    {
      id: 2,
      name: "sign Up",
      path: "/signup"
    }
  ]
  return (
    <>
      <header className={`lg:py-2 ${theme !== "light" ? "bg-[#1e1e1e] text-[#52f757]" : "bg-white text-black"}`}>
        <div className="lg:py-5 py-2 px-2 flex justify-between items-center relative z-20">
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/Jw8GM15S/sdaf.png"
              alt="logo not found"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold">GardenHive</span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium list-none">
            <NavBer_Link />
          </div>

          <div className="flex gap-3 items-center">

            <div className="relative w-10 h-10 cursor-pointer" onClick={toggleTheme}>
              <div className={`absolute inset-0 flex text-green-500 items-center justify-center transition-transform duration-500 ${theme === "light" ? "rotate-0 opacity-100" : "rotate-180 opacity-0"}`}>
                <WiDaySunny size={40} />
              </div>
              <div className={`absolute inset-0 flex text-yellow-500 items-center justify-center transition-transform duration-500 ${theme === "dark" ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}>
                <MdNightsStay size={30} />
              </div>
            </div>
            {user ? (
              <div className="relative cursor-pointer">
                <img
                  src={
                    dbUser?.photoURL || user.photoURL ||
                    "https://i.ibb.co/VpptK6ct/490026085-122124580022658680-3395895694716632953-n.jpg"
                  }
                  alt="profile"
                  onClick={() => setDropDown(!dropdown)}
                  className="w-10 object-cover h-10 rounded-full border hover:ring-2 hover:ring-blue-500 transition duration-200"
                />
                {dropdown && (
                  <div className={`${theme === "dark" ? 'bg-black/80 text-[#52f757]' : 'bg-white text-black'} font-bold absolute right-0 mt-2 w-40 border shadow-lg rounded-md z-50 p-2`} ref={dropdownClose}>
                    <p className="text-sm mb-2">Hi, {dbUser?.name || user.displayName
                      || 'Name Nai'}</p>
                    <button
                      onClick={handleLogout}
                      className={`${theme === "dark" ? 'bg-green-800/80 text-[#52f757]' : 'bg-green-500/90 text-black'} block w-full text-left px-4 py-2 text-sm hover:bg-green-500`}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              btnData.map(single => (
                <Link
                  key={single.path}
                  to={single.path}
                >
                  <button className={`btn hidden lg:block transition duration-300 
                  ${theme !== "dark"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#52f757] text-[#000000] hover:bg-green-900"
                    }`}>
                    {single.name}
                  </button>
                </Link>
              ))
            )}
            <button className="md:hidden text-3xl" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? '' : <CgMenuGridR />}
            </button>
          </div>
        </div>
        {
          mobileMenu && (
            <>
              {mobileMenu && (
                <div className="fixed inset-0 bg-black/40 bg-opacity-40 z-40" onClick={() => setMobileMenu(false)}></div>
              )}

              <div
                className={`fixed top-0 right-0 h-full w-2/3 bg-base-100 z-50 transform transition-transform duration-300 ease-in-out
               ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}
              >
                <div className="flex justify-end p-4">
                  <IoClose size={28} onClick={() => setMobileMenu(false)} className="cursor-pointer" />
                </div>
                <ul className="px-4 flex flex-col gap-4">
                  <NavBer_Link />
                </ul>
                <div className='flex flex-col gap-3 mt-4'>
                  {!user && (
                    btnData.map(single => <button className={`${theme !== "light" ? "bg-[#222222] text-[#52f757]" : "bg-white text-black"} btn w-full`}><Link to={single.path}>{single.name}</Link></button>)
                  )}
                </div>
              </div>
            </>
          )}
      </header >
    </>
  );
};

export default Header;
