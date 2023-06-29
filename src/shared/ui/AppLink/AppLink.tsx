import { ReactNode, memo } from 'react';
import { Link, LinkProps, useMatch } from 'react-router-dom';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
	className?: string;
	to: string;
	children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		className, to, children, ...otherProps
	} = props;

	const match = useMatch(to);

	const mods: Mods = {
		[cls.active]: Boolean(match),
	};

	return (
		<Link
			className={classNames(cls.AppLink, mods, [className])}
			to={to}
			{...otherProps}
			data-testid="app-link"
		>
			{children}
		</Link>
	);
});
