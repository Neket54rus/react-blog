import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string
}

export const PageError = memo((props: PageErrorProps) => {
	const {
		className,
	} = props;

	const { t } = useTranslation();

	const reloadPage = useCallback(() => {
		location.reload();
	}, []);

	return (
		<div className={classNames(cls.PageError, {}, [className, 'app'])}>
			<p className={cls.text}>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage} theme={ButtonTheme.OUTLINE}>{t('Обновить страницу')}</Button>
		</div>
	);
});
