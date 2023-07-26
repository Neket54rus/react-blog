import {
	memo, useCallback, useMemo,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import IconAbout from 'shared/assets/icons/icon-about.svg';
import iconLogo from 'shared/assets/icons/icon-logo.png';
import IconMain from 'shared/assets/icons/icon-main.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import { SidebarCollapseButton } from '../SidebarCollapseButton/SidebarCollapseButton';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
	const { className } = props;

	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);
	const location = useLocation();

	const itemsList = useMemo(() => [
		{ to: '/', Icon: IconMain, text: t('Главная') },
		{ to: '/about', Icon: IconAbout, text: t('О сайте') },
	], [t]);

	const onToggle = useCallback(() => {
		setCollapsed((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
			<div className={cls.content}>
				<div className={classNames(cls.logoWrapper, { [cls.collapsed]: collapsed })}>
					<img className={classNames(cls.logo, { [cls.collapsed]: collapsed })} src={iconLogo} alt="logo" />
				</div>
				<div className={cls.items}>
					{
						itemsList.map((item) => (
							<SidebarItem
								key={item.to}
								collapsed={collapsed}
								active={location.pathname === item.to}
								{...item}
							/>
						))
					}
				</div>
				<SidebarCollapseButton collapsed={collapsed} onClick={onToggle} />
				<div className={classNames(cls.switchers, { [cls.collapsed]: collapsed }, [])}>
					<ThemeSwitcher />
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	);
});
