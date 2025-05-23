import React from 'react';

const SingleRecent = ({ recent }) => {
  const { title } = recent
  return (
    <div>
      <h1>{title}</h1  >

    </div>
  );
};

export default SingleRecent;