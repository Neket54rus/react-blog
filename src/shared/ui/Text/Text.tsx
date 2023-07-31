import { memo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
	ERROR = 'error'
}

export enum TextSize {
	M = 'm',
	L = 'l'
}

export enum TextWeight {
	BOLD = 'bold',
	BLACK = 'black',
}

interface TextProps {
	className?: string
	children: string
	size?: TextSize
	weight?: TextWeight
	theme?: TextTheme
	center?: boolean
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		children,
		size,
		weight,
		theme,
		center = false,
	} = props;

	const mods: Mods = {
		[cls[weight!]]: Boolean(weight),
		[cls[size!]]: Boolean(size),
		[cls[theme!]]: Boolean(theme),
		[cls.center]: center,
	};

	return (
		<p className={classNames(cls.Text, mods, [className])}>
			{children}
		</p>
	);
});
