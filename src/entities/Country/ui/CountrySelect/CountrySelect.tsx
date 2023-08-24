import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  disabled?: boolean;
  value?: Country;
  onChange?: (value: Country) => void;
}

const optionsList = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, disabled = true, value, onChange } = props;

  const onChangeHandle = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      options={optionsList}
      disabled={disabled}
      value={value}
      onChange={onChangeHandle}
    />
  );
});
