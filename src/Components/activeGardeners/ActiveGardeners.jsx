import React, { useEffect, useState } from 'react';

const ActiveGardeners = () => {
  const [activeGardener, setActiveGardener] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/active-gardeners')
      .then(res => res.json())
      .then(data => {
        setActiveGardener(data)
      })
  }, [])
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {activeGardener.map((gardener, index) => (
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