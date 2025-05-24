import React, { useContext, useState } from 'react';
import { ThemeContext, UserAuth } from '../Context/UserAuth';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const SignUpPage = () => {
  document.title = 'Gardening Community | Sign In'
  const { theme } = useContext(ThemeContext)
  const { handleCreateUser, googleSign, setUser } = useContext(UserAuth)
  const [signUpText, setSignUpText] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...OtherData } = Object.fromEntries(formData.entries());

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain at least one lowercase letter.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return toast.error("Password must contain at least one special character. (!  @  #  $  %)");
    }

    const loadingToast = toast.loading('Creating your account...');
    handleCreateUser(email, password)
      .then(result => {
        setUser(result.user);
        const DbUser = {
          email,
          ...OtherData
        };
        fetch('https://assignment-10-server-virid-theta.vercel.app/users', {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(DbUser)
        }).then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              setSignUpText(true)
              toast.update(loadingToast, {
                render: 'Account created successfully! 🎉',
                type: 'success',
                isLoading: false,
                autoClose: 3000
              });
              form.reset();
              navigate('/');
            } else {
              toast.update(loadingToast, {
                render: 'Something went wrong while saving user!',
                type: 'error',
                isLoading: false,
                autoClose: 3000
              });
            }
          })
          .catch(() => {
            setSignUpText(false)
          });
      })
      .catch(e => {
        toast.update(loadingToast, {
          render: `Signup failed: ${e.code}`,
          type: 'error',
          isLoading: false,
          autoClose: 3000
        });
      });
  };


  const signinGoogle = () => {
    googleSign()
      .then((result) => {
        setUser(result.user)
        if (result.user) {
          toast.success("Logged in with Google!");
          navigate("/My-tips")
        }
      }).catch((error) => {
        toast.error(`${error}`);

      });
  }

  return (
    <div className={`w-full max-w-md mx-auto my-8 p-8 space-y-6 rounded-xl shadow-lg transition duration-300
  ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>

      <h1 className="text-3xl font-bold text-center text-green-500">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="space-y-1 text-sm">
          <label className="block font-medium">Email</label>
          <input type="email" required name="email" placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-md border outline-none focus:ring-2 
        ${theme === "dark"
                ? "bg-gray-800 text-white border-gray-700 focus:ring-green-500"
                : "bg-gray-100 text-black border-gray-300 focus:ring-green-600"
              }`} />
        </div>

        <div className="space-y-1 text-sm">
          <label className="block font-medium">Photo URL</label>
          <input type="text" required name="photoURL" placeholder="Enter photo URL"
            className={`w-full px-4 py-3 rounded-md border outline-none focus:ring-2 
        ${theme === "dark"
                ? "bg-gray-800 text-white border-gray-700 focus:ring-green-500"
                : "bg-gray-100 text-black border-gray-300 focus:ring-green-600"
              }`} />
        </div>

        <div className="space-y-1 text-sm">
          <label className="block font-medium">Name</label>
          <input type="text" required name="name" placeholder="Your name"
            className={`w-full px-4 py-3 rounded-md border outline-none focus:ring-2 
        ${theme === "dark"
                ? "bg-gray-800 text-white border-gray-700 focus:ring-green-500"
                : "bg-gray-100 text-black border-gray-300 focus:ring-green-600"
              }`} />
        </div>

        <div className="space-y-1 text-sm">
          <label className="block font-medium">Password</label>
          <input type="password" required name="password" placeholder="Create a password"
            className={`w-full px-4 py-3 rounded-md border outline-none focus:ring-2 
        ${theme === "dark"
                ? "bg-gray-800 text-white border-gray-700 focus:ring-green-500"
                : "bg-gray-100 text-black border-gray-300 focus:ring-green-600"
              }`} />
          <div className="flex justify-end text-xs">
            <a href="/not-found" className="text-green-500 hover:underline">Forgot Password?</a>
          </div>
        </div>

        <button type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition">
          {signUpText ? "Sign Up...." : "Sign Up"}
        </button>
      </form>

      <div className="flex items-center pt-6 space-x-2">
        <div className="flex-1 h-px bg-gray-300" />
        <p className="text-sm">Or continue with</p>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <div className="flex justify-center gap-4 pt-2">
        <button onClick={signinGoogle} className="p-3 rounded-full bg-white shadow hover:shadow-md">
          <FaGoogle size={20} className='text-green-600' />
        </button>
        <button onClick={() => Swal.fire({ icon: "error", title: "Twitter login not implemented." })} className="p-3 rounded-full bg-white shadow hover:shadow-md">
          <FaTwitter size={20} className='text-blue-600' />
        </button>
        <button onClick={() => Swal.fire({ icon: "error", title: "GitHub login not implemented." })} className="p-3 rounded-full bg-white shadow hover:shadow-md">
          <FaGithub size={20} className='text-gray-600' />
        </button>
      </div>

      <p className="text-sm text-center pt-4">
        Already have an account?{" "}
        <Link to='/signin' className="text-green-600 hover:underline font-medium">Sign In</Link>
      </p>
    </div>

  );
};

export default SignUpPage;