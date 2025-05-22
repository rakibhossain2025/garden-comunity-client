import React from 'react';

const SingleBanner = ({ trending }) => {
  console.log(trending)
  const { description, imageUrl, title, _id } = trending
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
     url(${imageUrl})`
    }}
      className='bg-no-repeat flex flex-col gap-2  justify-center items-center bg-center bg-cover min-h-[calc(100vh-64px)]' >

      <h3 className='lg:text-6xl text-xl text-white font-bold  '>{title}</h3>
      <p className='text-sm text-center text-white lg:text-lg '>
        {description}
      </p>
      <button className='bg-green-500 text-white lg:text-xl lg:px-14 px-4 rounded-md lg:rounded-xl py-1 lg:py-2'>See More</button>
    </div>
  );
};

export default SingleBanner;