import { StateSchema } from '@/app/providers/StoreProvider';
import { selectProfileError } from './selectProfileError';

describe('entities/Profile/selectProfileError', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error',
      },
    };
    const profileData = selectProfileError(state as StateSchema);
    expect(profileData).toEqual('Error');
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const profileData = selectProfileError(state as StateSchema);
    expect(profileData).toEqual(undefined);
  });
});
