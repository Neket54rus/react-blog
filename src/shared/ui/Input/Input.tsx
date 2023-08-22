import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    autofocus = false,
    fullWidth = false,
    ...otherProps
  } = props;

  const firstRender = useRef<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  useEffect(() => {
    if (!firstRender.current) {
      inputRef.current?.focus();
    }

    firstRender.current = false;
  }, [autofocus]);

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
  };

  return (
    <input
      className={classNames(cls.Input, mods, [className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      ref={inputRef}
      {...otherProps}
    />
  );
});
