import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
  title?: string;
}

export const NotFound = memo((props: NotFoundProps) => {
  const { className, title } = props;

  const navigate = useNavigate();
  const { t } = useTranslation();

  const goBack = () => navigate(-1);

  return (
    <div className={classNames(cls.NotFound, {}, [className])}>
      {title}
      <Button theme={ButtonTheme.OUTLINE} onClick={goBack}>
        {t('Вернуться назад')}
      </Button>
    </div>
  );
});
