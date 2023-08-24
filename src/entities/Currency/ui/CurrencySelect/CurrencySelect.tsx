import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  disabled?: boolean;
  value?: Currency;
  onChange?: (value: Currency) => void;
}

const optionsList = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, disabled = true, value, onChange } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      options={optionsList}
      disabled={disabled}
      value={value}
      onChange={onChangeHandler}
    />
  );
});
