const SingleTrend = ({ trending }) => {
  const { tips, UserName } = trending;

  return (
    <div className='mr-4 pb-12'>
      <div
        className="px-2 py-4 min-h-42 rounded-2xl overflow-hidden flex flex-col justify-center items-center text-xl transition duration-300">
        <h1 className='font-bold mb-2 absolute top-1 left-1/2 border-b'>Tips By: {UserName}</h1>
        <p className="mt-4">{tips}</p>
      </div>
    </div>
  );
};

export default SingleTrend;
