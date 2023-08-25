import { StateSchema } from '@/app/providers/StoreProvider';

import { ValidateProfileError } from '../../types/profile';
import { selectProfileValidateErrors } from './setProfileValidateErrors';

describe('entities/Profile/selectProfileValidateErrors', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_AGE],
      },
    };
    const validateErrors = selectProfileValidateErrors(state as StateSchema);
    expect(validateErrors).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const validateErrors = selectProfileValidateErrors(state as StateSchema);
    expect(validateErrors).toEqual(undefined);
  });
});
