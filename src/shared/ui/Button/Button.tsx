import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline-red',
  OUTLINE_BLACK = 'outlie-black',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.CLEAR, ...otherProps } = props;

  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps} type='button'>
      {children}
    </button>
  );
});
