import {
	memo, useCallback, useMemo, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import IconAbout from 'shared/assets/icons/icon-about.svg';
import IconArrow from 'shared/assets/icons/icon-arrow.svg';
import iconLogo from 'shared/assets/icons/icon-logo.png';
import IconMain from 'shared/assets/icons/icon-main.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
	const { className } = props;

	const { t } = useTranslation();
	const switcherRef = useRef(null);
	const [collapsed, setCollapsed] = useState(false);

	const itemsList = useMemo(() => [
		{ to: '/', Icon: IconMain, text: t('Главная'), collapsed },
		{ to: '/about', Icon: IconAbout, text: t('О сайте'), collapsed },
	], [collapsed, t]);

	const onToggle = useCallback(() => {
		setCollapsed((prev) => !prev);

		switcherRef.current.classList.add('hide');

		setTimeout(() => {
			switcherRef.current.classList.toggle(cls.collapsed);
			switcherRef.current.classList.remove('hide');
		}, 200);
	}, []);

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
			<div className={cls.content}>
				<div className={classNames(cls.logoWrapper, { [cls.collapsed]: collapsed })}>
					<img className={classNames(cls.logo, { [cls.collapsed]: collapsed })} src={iconLogo} alt="logo" />
				</div>
				<div className={cls.items}>
					{
						itemsList.map((item) => <SidebarItem key={item.to} {...item} />)
					}
				</div>
				<Button
					className={classNames(cls.toggleBtn, { [cls.collapsed]: collapsed }, [])}
					onClick={onToggle}
					data-testid="toggle-btn"
				>
					<IconArrow className={cls.arrow} />
					<IconArrow className={cls.arrowHover} />
				</Button>
				<div className={classNames(cls.switchers, {}, [])} ref={switcherRef}>
					<ThemeSwitcher />
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	);
});
