import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
	const {
		className,
	} = props;

	const { t } = useTranslation('not-found-page');
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			{t('Страница не найдена')}
			<Button theme={ButtonTheme.OUTLINE} onClick={goBack}>{t('Вернуться назад')}</Button>
		</div>
	);
});

export default NotFoundPage;
