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
      <div className="container p-2 mx-auto sm:p-4 ">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead className="dark:bg-green-400 ">
              <tr className="text-left">
                <th className="p-3">Category</th>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                myTips.map((singleTip) => (
                  < MyTipsBody
                    key={singleTip._id}
                    singleTip={singleTip}
                    myTips={myTips}
                    setMyTips={setMyTips} />
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