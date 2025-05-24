import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../../Context/UserAuth';
import MyTipsBody from './MyTipsBody';
import Loading from '../../../Components/Loading';

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
        setMyTipsLoader(false)
      })
  }, [userEmail])

  if (MyTipsLoader) return <Loading />

  return (<>{
    myTips ?
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
      </div> : <div>
        nai
      </div>
  }
  </>);
};

export default MyTips;