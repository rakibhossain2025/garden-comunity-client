import  { useContext, useEffect, useState } from 'react';
import {  UserAuth } from '../../../Context/UserAuth';
import MyTipsBody from './MyTipsBody';
import Loading from '../../../Components/Loading';
import { Link } from 'react-router';

const MyTips = () => {
  const { user } = useContext(UserAuth)
  const userEmail = user.email
  const [MyTipsLoader, setMyTipsLoader] = useState(true)
  const [myTips, setMyTips] = useState([])
  useEffect(() => {
    fetch(`https://assignment-10-server-virid-theta.vercel.app/tips/email/${userEmail}`)
      .then(res => res.json())
      .then(data => {
        setMyTips(data)
        document.title = `Gardening Community | My Tips`
        setMyTipsLoader(false)
      })
  }, [userEmail])

  if (MyTipsLoader) return <Loading />

  return (<>{
    myTips.length !== 0 ?
      <div className="my-12 p-4 mx-auto">
        <h2 className="mb-6 text-xl lg:text-4xl font-bold text-center">🌿 My Garden Tips</h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full text-sm">
            <thead className="bg-green-600 text-white dark:bg-green-500 dark:text-black">
              <tr className="text-left">
                <th className="p-3">Category</th>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                myTips.map((singleTip) => (
                  <MyTipsBody
                    key={singleTip._id}
                    singleTip={singleTip}
                    myTips={myTips}
                    setMyTips={setMyTips}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div> :
      <div className="mb-12 relative min-h-[500px] flex flex-col gap-3 bg-white">
  <div>
    <h1 className="text-xl lg:text-[70px] text-center font-bold">No Tips Share</h1>
  </div>
  <div className="flex flex-col bg-no-repeat bg-center justify-center items-center">
    <img
      src="https://i.ibb.co/hxdJSwhH/istockphoto-1281404534-612x612-1.png"
      alt=""
      className="h-[500px] mb-1"
    />
  </div>
  <Link to="/share-a-garden-tip">
    <button className="btn btn-primary px-6 mx-auto w-full py-3 text-lg shadow-md hover:shadow-lg transition duration-300">
      👈 Go for Share
    </button>
  </Link>
</div>

  }
  </>);
};

export default MyTips;