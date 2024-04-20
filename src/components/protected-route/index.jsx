import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserAuthenticated } from 'shared/store/slices/authSlice';

export function ProductedRoute({ children }) {
  const isAuthenticated = useSelector(isUserAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

  return children;
}
