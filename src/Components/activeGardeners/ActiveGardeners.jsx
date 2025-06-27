import React, { useEffect, useState } from 'react';
import Title from '../Shared/Title';
import { Link } from 'react-router';
import Container from '../Shared/Container';

const ActiveGardeners = ({ loader }) => {
  const [active, setActive] = useState([]);

  useEffect(() => {
    const activeProfile = loader.filter(a => a.availability !== "Hidden");
    setActive(activeProfile);
  }, [loader]);

  return (
    <>
      <Title text={'Featured Gardeners'} />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
          {active.map((gardener, index) => (

              <div key={index} className="rounded-xl border dark:border-[#52f757]/30 border-green-300 p-4 bg-white dark:bg-[#292222] text-black dark:text-[#52f757] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ">
                <div className="flex items-center gap-4">
                  <img
                    src={gardener.userImg}
                    alt={gardener.UserName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{gardener.UserName}</h3>
                    <p className="text-sm italic text-gray-500 dark:text-green-300">{gardener.category}</p>
                  </div>
                </div>
                <p className="my-3 flex-1 text-xs col-span-full italic text-gray-500 dark:text-gray-400">
                  "{gardener.tips?.slice(0, 70)}..."
                </p>
                <Link to={`/explore-gardeners`}>
                  <button className="w-full cursor-pointer">
                    View Profile
                  </button>
                </Link>
              </div>

          ))}
        </div>
      </Container>

    </>
  );
};

export default ActiveGardeners;
