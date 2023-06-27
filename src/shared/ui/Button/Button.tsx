import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton;
}

export const Button = memo((props: ButtonProps) => {
	const { className, children, theme = ThemeButton.CLEAR, ...otherProps } = props;

	return (
		<button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
});
