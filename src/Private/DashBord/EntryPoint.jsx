import { useContext } from 'react';
import { UserAuth } from '../../Context/UserAuth';
import Loading from '../../Components/Loading';

const EntryPoint = () => {
  const { user } = useContext(UserAuth)
  const { photoURL, displayName, email, emailVerified, uid, metadata, providerData } = user || {}
  if (!user) {
    <Loading />
    return
  }
  return (
    <>

      <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-xl transition-all">
        <div className="flex flex-col items-center text-center">
          <img
            src={photoURL}
            alt={displayName}
            className="w-24 h-24 rounded-full shadow-md ring-2 ring-green-400 mb-4"
          />
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">
            {displayName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
          <p className="mt-1 text-xs text-gray-400">
            <span className="font-semibold">UID:</span> {uid.slice(0, 12)}...
          </p>
          <div className="mt-4 space-y-2 text-left w-full">
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
              <span>✅ Email Verified:</span>
              <span>{emailVerified ? 'Yes' : 'No'}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
              <span>🔐 Provider:</span>
              <span>{providerData?.[0]?.providerId || 'N/A'}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
              <span>🕒 Last Login:</span>
              <span>{new Date(Number(metadata.lastLoginAt)).toLocaleString()}</span>
            </div>
          </div>
          <button
            className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow"
            onClick={() => alert("Edit profile coming soon!")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default EntryPoint;