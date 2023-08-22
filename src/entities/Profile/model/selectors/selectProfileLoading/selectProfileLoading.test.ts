import { StateSchema } from '@/app/providers/StoreProvider';

import { selectProfileLoading } from './selectProfileLoading';

describe('entities/Profile/selectProfileLoading', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    const profileData = selectProfileLoading(state as StateSchema);
    expect(profileData).toEqual(true);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const profileData = selectProfileLoading(state as StateSchema);
    expect(profileData).toEqual(undefined);
  });
});
