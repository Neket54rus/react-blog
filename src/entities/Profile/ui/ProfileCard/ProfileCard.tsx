import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text } from '@/shared/ui/Text/Text';

import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { Profile } from '../../model/types/profile';

import { Country, CountrySelect } from '@/entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  readonly?: boolean;
  changeName?: (value: string) => void;
  changeLastName?: (value: string) => void;
  changeAge?: (value: string) => void;
  changeCity?: (value: string) => void;
  changeUsername?: (value: string) => void;
  changeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    readonly,
    changeName,
    changeLastName,
    changeAge,
    changeCity,
    changeUsername,
    changeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile-page');
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={cls.loading}>
        <Loader />
      </div>
    );
  }

  const editBtn = readonly ? (
    <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
      {t('Редактировать  профиль')}
    </Button>
  ) : (
    <div className={cls.buttons}>
      <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
        {t('Сохранить')}
      </Button>
      <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
        {t('Отмена')}
      </Button>
    </div>
  );

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <div className={cls.avatar}>
          <Avatar src={data?.avatar} size={128} />
        </div>
        {editBtn}
      </div>
      <div className={cls.body}>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Имя')}:`}</Text>
          <Input
            placeholder={t('Введите имя')}
            value={data?.name}
            fullWidth
            disabled={readonly}
            onChange={changeName}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Имя пользователя')}:`}</Text>
          <Input
            placeholder={t('Введите имя пользователя')}
            value={data?.username}
            fullWidth
            disabled={readonly}
            onChange={changeUsername}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Фамилия')}:`}</Text>
          <Input
            placeholder={t('Введите фамилию')}
            value={data?.lastname}
            fullWidth
            disabled={readonly}
            onChange={changeLastName}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Ссылка на аватар')}:`}</Text>
          <Input
            placeholder={t('Введите ссылку на аватар')}
            value={data?.avatar}
            fullWidth
            disabled={readonly}
            onChange={changeAvatar}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Возраст')}:`}</Text>
          <Input
            placeholder={t('Введите возраст')}
            value={String(data?.age)}
            fullWidth
            disabled={readonly}
            onChange={changeAge}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Валюта')}:`}</Text>
          <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            disabled={readonly}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Город')}:`}</Text>
          <Input
            placeholder={t('Введите город')}
            value={data?.city}
            fullWidth
            disabled={readonly}
            onChange={changeCity}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Страна')}:`}</Text>
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            disabled={readonly}
          />
        </div>
      </div>
    </div>
  );
});
