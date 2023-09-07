import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleBlock } from '@/entities/Article';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    if (block.code) {
      navigator.clipboard.writeText(block.code);
    }
  }, [block.code]);

  return (
    <pre className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <code>{block.code}</code>
      <Button className={cls.copyBtn} theme={ButtonTheme.OUTLINE_BLACK} onClick={onCopy}>
        {t('Копировать')}
      </Button>
    </pre>
  );
});
