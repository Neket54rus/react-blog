import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextWeight } from '@/shared/ui/Text/Text';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <Skeleton radius='50%' height={32} width={32} />
        <div className={cls.text}>
          <Skeleton radius='32px' height={24} width={152} />
          <Skeleton radius='16px' height={70} />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <Avatar className={cls.avatar} src={comment!.user.avatar} size={32} />
      <div className={cls.text}>
        <Text weight={TextWeight.BOLD}>{comment!.user.username}</Text>
        <Text>{comment!.text}</Text>
      </div>
    </div>
  );
});
