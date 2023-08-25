import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileError } from '../../types/profile';
import { validateProfile } from './validateProfileData';

describe('entities/Profile/validateProfileData', () => {
  test('Проверка положительного результата', () => {
    const result = validateProfile({
      username: 'admin',
      country: Country.Russia,
      name: 'Nikita',
      lastname: 'Evdokimov',
      city: 'MSK',
      currency: Currency.RUB,
      age: 20,
    });

    expect(result).toEqual([]);
  });

  test('Проверка вывода ошибок', () => {
    const result = validateProfile({
      username: 'admin',
      country: Country.Russia,
      name: '',
      lastname: '',
      city: 'MSK',
      currency: Currency.RUB,
      age: 20,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
