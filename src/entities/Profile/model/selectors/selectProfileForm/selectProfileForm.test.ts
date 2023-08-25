import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { Profile } from '../../types/profile';
import { selectProfileForm } from './selectProfileForm';

const profile: Profile = {
  name: 'Никита',
  lastname: 'Евдокимов',
  age: 21,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar:
    'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg',
};

describe('entities/Profile/selectProfileFrom', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profile,
      },
    };

    const profileForm = selectProfileForm(state as StateSchema);

    expect(profileForm).toEqual(profile);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};

    const profileForm = selectProfileForm(state as StateSchema);

    expect(profileForm).toBe(undefined);
  });
});
