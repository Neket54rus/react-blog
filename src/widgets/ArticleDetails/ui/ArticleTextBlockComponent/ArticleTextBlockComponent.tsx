import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleBlock } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text size={TextSize.M}>{block.title}</Text>}
      {block.paragraphs?.map((p, index) => <Text key={index}>{p}</Text>)}
    </div>
  );
});
