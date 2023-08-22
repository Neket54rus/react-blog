import { StateSchema } from '@/app/providers/StoreProvider';

import { selectProfileReadonly } from './selectProfileReadonly';

describe('entities/Profile/selectProfileReadonly', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    const profileData = selectProfileReadonly(state as StateSchema);
    expect(profileData).toEqual(true);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const profileData = selectProfileReadonly(state as StateSchema);
    expect(profileData).toEqual(undefined);
  });
});
