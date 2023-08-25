import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
  ProfileCard,
  fetchProfileData,
  profileActions,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileLoading,
  selectProfileReadonly,
  selectProfileValidateErrors,
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
  const formData = useSelector(selectProfileForm);
  const isLoading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);
  const readonly = useSelector(selectProfileReadonly);
  const validateErrors = useSelector(selectProfileValidateErrors);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const changeName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ name: value }));
    },
    [dispatch],
  );

  const changeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );

  const changeAge = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfile({
          age:
            Number(value.match(/^\d+$/)) > 100
              ? 99
              : Number(value.match(/^\d+$/)),
        }),
      );
    },
    [dispatch],
  );

  const changeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const changeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );

  const changeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const changeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const changeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  if (error) {
    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div
          className={classNames(cls.ProfilePage, {}, [className, cls.error])}
        >
          <PageError />
        </div>
      </DynamicModuleLoader>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          readonly={readonly}
          changeName={changeName}
          changeLastName={changeLastName}
          changeAge={changeAge}
          changeCity={changeCity}
          changeUsername={changeUsername}
          changeAvatar={changeAvatar}
          onChangeCurrency={changeCurrency}
          onChangeCountry={changeCountry}
          validateErrors={validateErrors}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
