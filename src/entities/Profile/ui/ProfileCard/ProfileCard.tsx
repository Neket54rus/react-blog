import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text } from '@/shared/ui/Text/Text';

import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  readonly?: boolean;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className, data, isLoading, readonly } = props;

  const { t } = useTranslation('profile-page');

  if (isLoading) {
    return (
      <div className={cls.loading}>
        <Loader />
      </div>
    );
  }

  const editBtn = readonly ? (
    <Button theme={ButtonTheme.OUTLINE}>{t('Редактировать  профиль')}</Button>
  ) : (
    <div className={cls.buttons}>
      <Button theme={ButtonTheme.OUTLINE}>{t('Сохранить')}</Button>
      <Button theme={ButtonTheme.OUTLINE_RED}>{t('Отмена')}</Button>
    </div>
  );

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <div className={cls.avatar}>
          <img src={data?.avatar} alt='avatar' />
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
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Имя пользователя')}:`}</Text>
          <Input
            placeholder={t('Введите имя пользователя')}
            value={data?.username}
            fullWidth
            disabled={readonly}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Фамилия')}:`}</Text>
          <Input
            placeholder={t('Введите фамилию')}
            value={data?.lastname}
            fullWidth
            disabled={readonly}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Ссылка на аватар')}:`}</Text>
          <Input
            placeholder={t('Введите ссылку на аватар')}
            value={data?.avatar}
            fullWidth
            disabled={readonly}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Возраст')}:`}</Text>
          <Input
            placeholder={t('Введите возраст')}
            value={String(data?.age)}
            fullWidth
            disabled={readonly}
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Валюта')}:`}</Text>
          <Input
            placeholder={t('Введите валюту')}
            value={data?.currency}
            fullWidth
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
          />
        </div>
        <div className={cls.inputWrapper}>
          <Text noWrap>{`${t('Страна')}:`}</Text>
          <Input
            placeholder={t('Введите страну')}
            value={data?.country}
            fullWidth
            disabled={readonly}
          />
        </div>
      </div>
    </div>
  );
});
