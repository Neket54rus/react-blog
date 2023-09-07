import { CSSProperties, memo, useLayoutEffect, useMemo, useState } from 'react';

import IconProfile from '@/shared/assets/icons/icon-profile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size } = props;

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      setLoading(false);
      setError(true);
    };
  }, [src]);

  const styles = useMemo<CSSProperties>(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
    }),
    [size],
  );

  const svgStyle = useMemo<CSSProperties>(
    () => ({
      scale: `${size / 20}`,
    }),
    [size],
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
        <Skeleton width={size} height={size} radius='50%' />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
        <IconProfile className={cls.icon} style={svgStyle} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
      <img className={classNames(cls.image, {}, [className])} src={src} alt='avatar' />
    </div>
  );
});
