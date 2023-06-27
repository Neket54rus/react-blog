import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
	const { className } = props;

	const { t, i18n } = useTranslation();

	const onToggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button className={classNames(cls.LanguageSwitcher, {}, [className])} onClick={onToggle}>
			{t('RU')}
		</Button>
	);
});
