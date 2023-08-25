import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectUserAuthData } from '@/entities/User';

import { RoutePath } from '../config/routeConfig';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props;

  const isAuth = useSelector(selectUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
