import React from 'react';

const ActiveGardeners = ({ loader }) => {


  return (
    <>
      <h2 className='text-xl lg:text-5xl text-center font-bold my-4'>Active Gardeners</h2>
      <div className="grid grid-cols-3 gap-4">
        {loader.map((gardener, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <p className='text-center text-black'>img  </p>
            <h3 className="mt-2 text-xl text-black font-semibold">{gardener.tips}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActiveGardeners;