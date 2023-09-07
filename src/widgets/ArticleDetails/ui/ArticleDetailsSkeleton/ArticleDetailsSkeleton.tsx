import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleDetailsSkeleton.module.scss';

interface ArticleDetailsSkeletonProps {
  className?: string;
}

export const ArticleDetailsSkeleton = memo((props: ArticleDetailsSkeletonProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticleDetailsSkeleton, {}, [className])}>
      <div className={cls.header}>
        <Skeleton className={cls.first} width={32} height={32} radius='50%' />
        <Skeleton className={cls.second} width={152} height={24} radius='32px' />
      </div>
      <Skeleton className={cls.third} height={38} radius='8px' />
      <Skeleton className={cls.fourth} width={667} height={38} radius='8px' />
      <Skeleton className={cls.fifth} width={573} height={27} radius='8px' />
      <Skeleton className={cls.sixth} height={420} radius='16px' />
      <Skeleton className={cls.seventh} width={660} height={17} radius='4px' />
      <Skeleton className={cls.eighth} width={624} height={17} radius='4px' />
      <Skeleton className={cls.ninth} height={17} radius='4px' />
    </div>
  );
});
