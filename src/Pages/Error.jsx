import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className=' bg-no-repeat bg-center opacity-25 bg-red-400 bg-[url("https://i.ibb.co/39NhZYHT/istockphoto-1281404534-612x612.jpg")]'>
      <div className='min-h-screen'>
        <h1 className='text-green-500  font-bold text-xl lg:text-4xl '>error <Link to='/'>go back </Link></h1>
      </div>
    </div>
  );
};

export default Error;