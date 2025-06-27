import React, { useContext, useEffect, useRef, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router';
import NavBer_Link from '../utility/NavBer_Link';
import { UserAuth } from '../Context/UserAuth';
import { IoClose } from 'react-icons/io5';
import Toggle from './Shared/Toggle';
import Container from './Shared/Container';
import Logo from './Shared/Logo';

const Header = () => {
  const { user, handleSignOut } = useContext(UserAuth);
  const [dropdown, setDropDown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownClose = useRef(null);
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://assignment-10-server-virid-theta.vercel.app/users/email/${user.email}`);
        const data = await res.json();
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
        setDropDown(false);
      }
    };
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setDropDown(false);
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useEffect(() => {


  }, [])

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
  ];

  return (
    <>
      <header className={`lg:py-4 px-2 py-2 sticky top-0 z-[999] bg-white dark:bg-black/60`}>
        <Container>

          <div className="flex justify-between items-center relative z-20">
            <Logo />

            <div className="hidden lg:flex items-center gap-6 font-medium list-none">
              <NavBer_Link />
            </div>

            <div className="flex gap-3 items-center">
              <Toggle />
              {user ? (
                <div className="relative cursor-pointer">
                  <img
                    title={dbUser?.name || user.displayName}
                    src={
                      dbUser?.photoURL || user.photoURL ||
                      "https://i.ibb.co/VpptK6ct/490026085-122124580022658680-3395895694716632953-n.jpg"
                    }
                    alt="profile"
                    onClick={() => setDropDown(!dropdown)}
                    className="w-10 object-cover h-10 rounded-full border hover:ring-2 hover:ring-blue-500 transition duration-200"
                  />
                  {dropdown && (
                    <div className="font-bold bg-white dark:bg-black dark:text-white absolute right-0 mt-2 w-40 border shadow-lg rounded-md z-50 p-2" ref={dropdownClose}>
                      <p className="text-sm mb-2">Hi, {dbUser?.name || user.displayName || 'Name Nai'}</p>
                      <Link className='' to='/dashboard'><button className='w-full mb-3'>Dashboard</button></Link>
                      <button
                        onClick={() => handleSignOut()}
                        className="block w-full text-left px-4 py-2 text-sm "
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
                    <button className="btn hidden lg:block transition duration-300">
                      {single.name}
                    </button>
                  </Link>
                ))
              )}
              <div className="md:hidden text-3xl" onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? '' : <CgMenuGridR />}
              </div>
            </div>
          </div>
          {
            mobileMenu && (
              <>
                {mobileMenu && (
                  <div className="fixed inset-0 bg-black/40 bg-opacity-40 z-40" onClick={() => setMobileMenu(false)}></div>
                )}

                <div
                  className={`fixed top-0 right-0 h-full w-2/3 bg-base-100 z-50 transform transition-transform duration-300 ease-in-out bg-black/80
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
                      btnData.map(single => <button className="btn w-full"><Link to={single.path}>{single.name}</Link></button>)
                    )}
                  </div>
                </div>
              </>
            )}
        </Container>
      </header>
    </>
  );
};

export default Header;
