import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (

    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
     url(${"https://i.ibb.co/39NhZYHT/istockphoto-1281404534-612x612.jpg"})`
    }}
    className='flex flex-col min-h-screen bg-no-repeat bg-center justify-center items-center'
    >
      <h1 className='text-green-500 font-bold text-xl lg:text-4xl '>error <Link to='/'>go back </Link></h1>
    </div>
  );
};

export default Error;