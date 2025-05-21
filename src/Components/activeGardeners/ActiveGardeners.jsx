import React, { useEffect, useState } from 'react';
import ActiveGardener from './ActiveGardener';

const ActiveGardeners = () => {
  const [activeGardener, setActiveGardener] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/activegardeners')
      .then(res => res.json())
      .then(data => {
        setActiveGardener(data)
        // console.log(data)
      })
  }, [])
  console.log(activeGardener.length)
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {activeGardener.map((gardener, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <h3 className="mt-2 text-xl font-semibold">{gardener.description}</h3>
          </div>
        ))}
      </div>

    </>


    // <div>
    //   {/* {activeGardener.map(activeUG => {
    //     <ActiveGardener key={activeUG._id} activeUG={activeUG} />
    //   })} */}
    // </div>
  );
};

export default ActiveGardeners;