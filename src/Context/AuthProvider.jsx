import React, { useEffect, useState } from 'react';
import { UserAuth } from './UserAuth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loginError, setLoginError] = useState(null)
  const [SigninError, setSigninError] = useState(null)


  const handleCreateUser = async (email, password) => {
    setLoading(true);
    setSigninError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return userCredential;
    } catch (error) {
      setLoading(false);
      setSigninError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLoginUser = async (email, password) => {
    try {
      const signinWithPass = signInWithEmailAndPassword(auth, email, password)
      setUser(signinWithPass.user)
      return signinWithPass
    } catch (e) {
      setLoginError(e.code)
    }
  };


  const provider = new GoogleAuthProvider()

  const googleSign = () => {
    return signInWithPopup(auth, provider)
  }

  const handleSignOut = () => {
    signOut(auth).then(u => {
      setUser(u)
      setLoading(true)
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  })

  const userInfo = {
    user,
    setUser,
    handleCreateUser,
    handleLoginUser,
    handleSignOut,
    loading,
    setLoginError,
    loginError,
    SigninError,
    googleSign
  }

  return (
    <UserAuth value={userInfo}>
      {children}
    </UserAuth>
  );
};

export default AuthProvider;