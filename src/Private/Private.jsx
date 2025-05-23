import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../Context/UserAuth';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router';

const Private = ({ children }) => {
  const { user, loading } = useContext(UserAuth)
  const [isRedirect, setIsRedirect] = useState(false)
  useEffect(() => {
    if (!user && !loading) {
      Swal.fire({
        title: "You Don't Have Access...",
        text: `🔏 You need to login first to access this page`,
        icon: 'error',
        allowOutsideClick: false,
        confirmButtonText: 'Login Now',
        buttonsStyling: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setIsRedirect(true);
        }
      });
    }
  }, [user, loading]);

  if (!user && isRedirect) return <Navigate to='/signin' ></Navigate >
  if (!user) return <div style={{ minHeight: '100vh' }}></div>
  return (<>{children}</>);
};

export default Private;