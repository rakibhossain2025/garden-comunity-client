import React, { useContext, useState } from 'react';
import { UserAuth } from '../Context/UserAuth';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const SignUpPage = () => {

  const { handleCreateUser, googleSign, setUser } = useContext(UserAuth)

  const [signUpError, setSignUpError] = useState(null)
  if (signUpError) {
    console.log(signUpError)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const { email, password, ...OtherData } = Object.fromEntries(formData.entries())

    handleCreateUser(email, password)
      .then(result => {
        setUser(result.user)
        const DbUser = {
          email,
          ...OtherData
        }
        fetch('https://assignment-10-server-virid-theta.vercel.app/users', {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(DbUser)
        }).then(res => res.json()).then(data => {
          console.log(data)
          if (data.insertedId) {
            console.log("paise")
          }
        })
        console.log(result)
      })
      .catch(e => {
        setSignUpError(e.code)
      })
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
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto mt-4 dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      {
        signUpError
        && <p>{signUpError}</p>
      }
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Email</label>
          <input type="text" name="email" placeholder="Username" className="w-full px-4 py-3 outline rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">photoURL</label>
          <input type="text" name="photoURL" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 outline dark:text-gray-800 focus:dark:border-violet-600" />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Name</label>
          <input type="text" name="name" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 outline focus:dark:border-violet-600" />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 outline dark:text-gray-800 focus:dark:border-violet-600" />
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a className="underline" href="/not-found">Forgot Password?</a>
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
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <FaTwitter size={25} className='cursor-pointer' />
        </button>
        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <FaGithub size={25} className='cursor-pointer' />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">Have an account?
        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign In</a>
      </p>
    </div>
  );
};

export default SignUpPage;