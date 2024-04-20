import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserAuthenticated } from 'shared/store/slices/authSlice';

export function DefaultRoute({ children, defaultPath }) {
  const isAuthenticated = useSelector(isUserAuthenticated);

  if (!isAuthenticated) {
    return children;
  }

  return <Navigate to={defaultPath} />;
}
