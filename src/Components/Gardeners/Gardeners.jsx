import React, { useEffect, useState } from 'react';
import { MdDoNotDisturb, MdOutlinePublic, MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import Loading from '../Loading';

const Gardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    document.title = 'Gardening Community | Explore gardeners';
    fetch("https://assignment-10-server-virid-theta.vercel.app/active-gardeners")
      .then(r => r.json())
      .then(d => {
        setGardeners(d);
        setLoader(true);
      }).finally(
        setLoader(false)
      );
  }, []);

  if (!loader) {
    return <Loading />;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Gardeners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardeners.map((gardener) => (
            <div
              key={gardener._id}
              className="w-full max-w-sm mx-auto border rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="w-full h-60">
                <img
                  src={gardener.userImg || gardener.imageUrl}
                  alt={gardener.UserName}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold">{gardener.UserName}</h2>

                <div className="text-base flex items-center gap-2 font-medium text-green-600">
                  Specialty: <span>{gardener.category}</span>
                </div>


                <p className="text-base"> <strong>Plant Type:</strong> {gardener.plantType}</p>
                <p className="text-base"> <strong>Tips Shared:</strong> {gardener.totalShareTips||3}</p>

                <p className="text-[15px] text-gray-500 dark:text-gray-400 italic">
                  "{gardener.tips?.slice(0, 100) || 'try to a good tree make'}..."
                </p>

                <div className="mt-4 flex gap-2">
                  {gardener.availability === "Hidden" ? (
                    <span className="flex w-full items-center px-3 py-1 bg-red-100 text-red-600 text-md rounded-full">
                      <RiGitRepositoryPrivateLine />
                      Private
                    </span>
                  ) : (
                    <span className="items-center px-3 py-1 bg-emerald-100 text-emerald-600 text-md flex w-full gap-1 rounded-full">
                      <MdPublic />  Public
                    </span>
                  )}

                  {gardener.status ? (
                    <span className="items-center w-full px-3 py-1 bg-emerald-100 text-emerald-600 text-md flex gap-1 rounded-full">
                      <MdOutlinePublic /> Active
                    </span>
                  ) : (
                    <span className="w-full px-3 py-1 bg-gray-200 text-gray-600 text-md flex items-center rounded-full">
                      <MdDoNotDisturb /> Not Active
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gardeners;