import {
	memo, useCallback, useRef, useState,
} from 'react';

import IconArrow from 'shared/assets/icons/icon-arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
	const { className } = props;

	const [collapsed, setCollapsed] = useState(false);
	const switcherRef = useRef(null);

	const onToggle = useCallback(() => {
		setCollapsed((prev) => !prev);

		switcherRef.current.classList.add('hide');
		setTimeout(() => {
			switcherRef.current.classList.toggle(cls.collapsed);
			switcherRef.current.classList.remove('hide');
		}, 200);
	}, []);

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<div className={cls.content}>
				<Button
					className={classNames(cls.toggleBtn, { [cls.collapsed]: collapsed }, [])}
					onClick={onToggle}
				>
					<IconArrow className={cls.icon} />
					<IconArrow className={cls.iconHover} />
				</Button>
				<div className={classNames(cls.switchers, {}, [])} ref={switcherRef}>
					<ThemeSwitcher />
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	);
});
