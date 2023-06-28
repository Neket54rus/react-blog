import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
	const {
		className,
	} = props;

	const { t } = useTranslation('not-found-page');

	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	);
});

export default NotFoundPage;
