import { memo } from 'react';

import IconTheme from '@/shared/assets/icons/icon-theme.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/useTheme/useTheme';
import { Button } from '@/shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
	const { className } = props;

	const { toggleTheme } = useTheme();

	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
			data-testid="switcher-btn"
		>
			<IconTheme className={cls.icon} />
		</Button>
	);
});
