import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../../../store/auth-slice';

import { Navigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.logout());
   }, [dispatch]);

  return <Navigate to="/auth" />;
};

export default Logout;
