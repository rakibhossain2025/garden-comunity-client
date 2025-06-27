import React, { useContext, useState } from 'react';
import {  UserAuth } from '../Context/UserAuth';
import Swal from 'sweetalert2';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const SigninPage = () => {
  document.title = 'Gardening Community | Sign In'
  const { handleLoginUser, loginError, setSigninError, setUser, googleSign } = useContext(UserAuth)
  const navigate = useNavigate();
  const [btnText, setBtnText] = useState(false)

  const handleSignInWithPass = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const { email, password } = formData;

    const loadingToast = toast.loading("Signing you in...");

    handleLoginUser(email, password)
      .then((result) => {
        setBtnText(true)
        setUser(result.user);
        toast.update(loadingToast, {
          render: "Login successful! 🎉",
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((error) => {
        setBtnText(false)
        toast.update(loadingToast, {
          render: `Login failed: ${error.message}`,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };


  const signinGoogle = () => {
    googleSign()
      .then((result) => {
        setUser(result.user)
        if (result.user) {
          toast.success("Logged in with Google! 🎉");
          navigate("/My-tips")
        }
      }).catch((error) => {
        setSigninError(error);
      });
  }

  return  (
     <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="w-full max-w-md mx-auto my-8 p-8 space-y-5 section-bg shadow-lg backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 rounded-2xl">
        {loginError && (
          <p className="text-red-500 text-center font-medium">{loginError}</p>
        )}

        <h1 className="text-3xl font-bold text-center text-green-600">Sign In</h1>

        <form onSubmit={handleSignInWithPass} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input-field"
            />
            <div className="flex justify-end text-xs">
              <a href="#" className="hover:underline text-green-600">
                Forgot Password?
              </a>
            </div>
          </div>

          <button type="submit" className="btn w-full">
            {btnText ? "Signing in..." : "Sign In"}
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
            <FaGoogle size={20} className="text-green-600" />
          </button>
          <button
            onClick={() =>
              Swal.fire({
                icon: "error",
                text: "We have not implemented Twitter login yet.",
                title: "Sorry!",
              })
            }
            aria-label="Log in with Twitter"
            className="p-3 rounded-full bg-white shadow hover:shadow-md transition"
          >
            <FaTwitter size={20} className="text-blue-600" />
          </button>
          <button
            onClick={() =>
              Swal.fire({
                icon: "error",
                text: "We have not implemented GitHub login yet.",
                title: "Sorry!",
              })
            }
            aria-label="Log in with GitHub"
            className="p-3 rounded-full bg-white shadow hover:shadow-md transition"
          >
            <FaGithub size={20} className="text-gray-600" />
          </button>
        </div>

        <p className="text-xs text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="underline text-green-600 hover:text-green-800 font-medium"
          >
            Sign up
          </Link>
        </p>

        <ToastContainer position="top-center" />
      </div>
    </div>
  );;
};

export default SigninPage;