import { CSSProperties, memo, useMemo } from 'react';

import IconProfile from '@/shared/assets/icons/icon-profile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
    }),
    [size],
  );

  return src ? (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      alt='avatar'
      style={styles}
    />
  ) : (
    // TODO: add size IconProfile
    <IconProfile className={cls.icon} />
  );
});
