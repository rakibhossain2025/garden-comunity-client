import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (

    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
     url(${"https://i.ibb.co/nW29qpD/2734794-1.jpg"})`
    }}
      className='flex flex-col min-h-screen bg-no-repeat bg-center justify-center items-center'
    >
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        ❌ Error Occurred!
      </h1>
      <Link to="/" className="btn btn-error text-white text-lg">
        🔙 Go Back to Home
      </Link>
    </div>
  );
};

export default Error;