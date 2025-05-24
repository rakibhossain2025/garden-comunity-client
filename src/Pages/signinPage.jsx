import React, { useContext } from 'react';
import { ThemeContext, UserAuth } from '../Context/UserAuth';
import Swal from 'sweetalert2';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const SigninPage = () => {
  const { handleLoginUser, loginError, setUser, googleSign } = useContext(UserAuth)
  const { theme } = useContext(ThemeContext)
  const handleSignInWithPass = (e) => {
    const fromData = Object.fromEntries(new FormData(e.target).entries())
    const { password, email } = fromData
    e.preventDefault()
    handleLoginUser(email, password)
      .then((result) => {
        console.log('success', result)
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
    <div className={`w-full max-w-md mx-auto my-8 p-8 space-y-5 rounded-2xl shadow-lg transition duration-300 
  ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>

      {loginError && <p className="text-red-500 text-center font-medium">{loginError}</p>}

      <h1 className="text-3xl font-bold text-center text-green-600">Sign In</h1>

      <form onSubmit={handleSignInWithPass} className="space-y-6">

        <div className="space-y-1 text-sm">
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 
          ${theme === "dark"
                ? "bg-gray-800 text-white border-gray-700 focus:ring-green-500"
                : "bg-gray-100 text-black border-gray-300 focus:ring-green-600"
              }`}
          />
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 
          ${theme === "dark"
                ? "bg-gray-800 text-white border-gray-700 focus:ring-green-500"
                : "bg-gray-100 text-black border-gray-300 focus:ring-green-600"
              }`}
          />
          <div className="flex justify-end text-xs">
            <a href="#" className="hover:underline text-green-600">Forgot Password?</a>
          </div>
        </div>

        <button type="submit" className="w-full p-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition">
          Sign In
        </button>
      </form>

      <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300" />
        <p className="text-sm">Or login with</p>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={signinGoogle}
          aria-label="Log in with Google"
          className="p-3 rounded-full bg-white shadow hover:shadow-md transition"
        >
          <FaGoogle size={20} className='text-green-600' />
        </button>
        <button
          onClick={() => Swal.fire({ icon: "error", text: "We have not implemented Twitter login yet.", title: "Sorry!" })}
          aria-label="Log in with Twitter"
          className="p-3 rounded-full bg-white shadow hover:shadow-md transition"
        >
          <FaTwitter size={20} className='text-blue-600' />
        </button>
        <button
          onClick={() => Swal.fire({ icon: "error", text: "We have not implemented GitHub login yet.", title: "Sorry!" })}
          aria-label="Log in with GitHub"
          className="p-3 rounded-full bg-white shadow hover:shadow-md transition"
        >
          <FaGithub size={20} className='text-gray-600' />
        </button>
      </div>

      <p className="text-xs text-center mt-4">
        Don't have an account?{" "}
        <a href="#" className="underline text-green-600 hover:text-green-800 font-medium">Sign up</a>
      </p>
    </div>

  );
};

export default SigninPage;