import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectUserAuthData } from '@/entities/User';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  className?: string;
  to: string;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  text: string;
  collapsed?: boolean;
  active?: boolean;
  authOnly?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    className,
    to,
    Icon,
    text,
    collapsed = false,
    active = false,
    authOnly,
  } = props;

  const { t } = useTranslation();
  const isAuth = useSelector(selectUserAuthData);

  const mods: Mods = {
    [cls.active]: active,
    [cls.collapsed]: collapsed,
  };

  if (authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(cls.SidebarItem, mods, [className])}
      to={to}
      max
      active={active}
      data-testid='sidebarItem'
    >
      {Icon && <Icon className={cls.icon} />}
      <span className={classNames(cls.text, { [cls.collapsed]: collapsed })}>
        {t(text)}
      </span>
    </AppLink>
  );
});
