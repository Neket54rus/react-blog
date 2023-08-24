import { ChangeEvent, memo, useCallback, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, options, value, onChange, disabled = true } = props;

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  const optionsList = useMemo(() => {
    return options?.map(({ value, content }) => (
      <option value={value} key={value}>
        {content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      <select
        value={value}
        onChange={onChangeHandler}
        className={classNames('', { [cls.disabled]: disabled })}
        disabled={disabled}
      >
        {optionsList}
      </select>
    </div>
  );
});
