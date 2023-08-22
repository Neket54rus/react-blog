import { memo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error',
}

export enum TextSize {
    M = 'm',
    L = 'l',
}

export enum TextWeight {
    BOLD = 'bold',
    BLACK = 'black',
}

interface TextProps {
    className?: string;
    children: string;
    size?: TextSize;
    weight?: TextWeight;
    theme?: TextTheme;
    center?: boolean;
    'data-testid'?: string;
    noWrap?: boolean;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        children,
        size,
        weight,
        theme,
        center = false,
        'data-testid': dataTestId = 'text',
        noWrap = false,
    } = props;

    const mods: Mods = {
        [cls[weight!]]: Boolean(weight),
        [cls[size!]]: Boolean(size),
        [cls[theme!]]: Boolean(theme),
        [cls.center]: center,
        [cls.noWrap]: noWrap,
    };

    return (
        <p
            className={classNames(cls.Text, mods, [className])}
            data-testid={`${dataTestId}`}
        >
            {children}
        </p>
    );
});
