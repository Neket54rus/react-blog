import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

export const App = memo(() => {
  const dispatch = useAppDispatch();
  const userInited = useSelector(selectUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          {userInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
});
