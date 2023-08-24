import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { selectUserAuthData } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';

export const AppRouter = memo(() => {
  const isAuth = useSelector(selectUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<div className='page-wrapper'>{route.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
});
