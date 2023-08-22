import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
  selectProfileData,
  selectProfileError,
  selectProfileLoading,
  selectProfileReadonly,
} from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageError } from '@/widgets/PageError';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const data = useSelector(selectProfileData);
  const isLoading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);
  const readonly = useSelector(selectProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  if (error) {
    return (
      <div className={classNames(cls.ProfilePage, {}, [className, cls.error])}>
        <PageError />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard data={data} isLoading={isLoading} readonly={readonly} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
