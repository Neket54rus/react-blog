import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    to: string;
    children: ReactNode;
    max?: boolean;
    active?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        max = false,
        active = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.active]: active,
        [cls.max]: max,
    };

    return (
        <Link
            className={classNames(cls.AppLink, mods, [className])}
            to={to}
            data-testid='app-link'
            {...otherProps}
        >
            {children}
        </Link>
    );
});
