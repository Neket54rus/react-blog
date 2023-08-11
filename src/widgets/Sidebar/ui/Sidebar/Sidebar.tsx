import { memo, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import IconAbout from '@/shared/assets/icons/icon-about.svg';
import iconLogo from '@/shared/assets/icons/icon-logo.png';
import IconMain from '@/shared/assets/icons/icon-main.svg';
import IconProfile from '@/shared/assets/icons/icon-profile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { SidebarCollapseButton } from '../SidebarCollapseButton/SidebarCollapseButton';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

const itemsList = [
    { to: '/', Icon: IconMain, text: 'Главная' },
    { to: '/about', Icon: IconAbout, text: 'О сайте' },
    { to: '/profile', Icon: IconProfile, text: 'Профиль' },
];

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid='sidebar'
        >
            <div className={cls.content}>
                <div
                    className={classNames(cls.logoWrapper, {
                        [cls.collapsed]: collapsed,
                    })}
                >
                    <img
                        className={classNames(cls.logo, {
                            [cls.collapsed]: collapsed,
                        })}
                        src={iconLogo}
                        alt='logo'
                    />
                </div>
                <div className={cls.items}>
                    {itemsList.map((item) => (
                        <SidebarItem
                            key={item.to}
                            collapsed={collapsed}
                            active={location.pathname === item.to}
                            {...item}
                        />
                    ))}
                </div>
                <SidebarCollapseButton
                    collapsed={collapsed}
                    onClick={onToggle}
                />
                <div
                    className={classNames(
                        cls.switchers,
                        { [cls.collapsed]: collapsed },
                        [],
                    )}
                >
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
});
