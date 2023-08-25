import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { selectUserInited } from './selectUserInited';

describe('entities/User/selectUserInited', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
      },
    };
    const userInited = selectUserInited(state as StateSchema);
    expect(userInited).toBe(true);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const userInited = selectUserInited(state as StateSchema);
    expect(userInited).toBe(undefined);
  });
});
