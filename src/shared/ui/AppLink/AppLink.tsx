import { ReactNode, memo } from 'react';
import { Link, LinkProps, useMatch } from 'react-router-dom';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	CENTER = 'center'
}

interface AppLinkProps extends LinkProps {
	className?: string;
	to: string;
	children: ReactNode;
	theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		className, to, children, theme, ...otherProps
	} = props;

	const match = useMatch(to);

	const mods: Mods = {
		[cls.active]: Boolean(match),
	};

	return (
		<Link
			className={classNames(cls.AppLink, mods, [className, cls[theme]])}
			to={to}
			{...otherProps}
			data-testid="app-link"
		>
			{children}
		</Link>
	);
});
