import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { selectProfileData } from './selectProfileData';

describe('entities/Profile/selectProfileData', () => {
  test('Проверка положительного результата', () => {
    const profile = {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profile,
      },
    };
    const profileData = selectProfileData(state as StateSchema);
    expect(profileData).toEqual(profile);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const profileData = selectProfileData(state as StateSchema);
    expect(profileData).toEqual(undefined);
  });
});
