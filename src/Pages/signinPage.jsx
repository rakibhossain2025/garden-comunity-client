import React, { useContext } from 'react';
import { UserAuth } from '../Context/UserAuth';
import Swal from 'sweetalert2';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const SigninPage = () => {
  const { handleLoginUser, loginError, user, setUser, googleSign } = useContext(UserAuth)
  console.log(user)

  const handleSignInWithPass = (e) => {
    const fromData = Object.fromEntries(new FormData(e.target).entries())
    const { password, email } = fromData
    e.preventDefault()

    handleLoginUser(email, password)
      .then(() => {
        console.log('success')
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }

  const signinGoogle = () => {
    console.log("error.code");
    googleSign()
      .then((result) => {
        setUser(result.user)

      }).catch((error) => {

        console.log(error);

      });
  }


  return (
    <div className="w-full max-w-md mx-auto my-4 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      {loginError && <p>{loginError}</p>}
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <form onSubmit={handleSignInWithPass} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Email</label>
          <input type="email" name="email" id="username" placeholder="Email " className="w-full px-4 py-3 outline rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={signinGoogle} aria-label="Log in with Google" className="p-3 rounded-sm cursor-pointer">
          <FaGoogle size={25} className='cursor-pointer' />
        </button>
        <button onClick={() => { Swal.fire({ icon: "error", text: "we are not implement Twitter  functionality !", title: "Sorry...(only google)", }) }} aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <FaTwitter size={25} className='cursor-pointer' />
        </button>
        <button onClick={() => { Swal.fire({ icon: "error", text: "we are not implement Twitter  functionality !", title: "Sorry...(only google)", }) }} aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <FaGithub size={25} className='cursor-pointer' />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</a>
      </p>
    </div>
  );
};

export default SigninPage;