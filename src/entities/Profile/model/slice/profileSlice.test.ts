import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';
import { profileReducer } from './profileSlice';

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

describe('entities/Profile/profileSlice', () => {
  test('Проверка получения данных о профиле', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: {},
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled(profile, ''),
      ),
    ).toEqual({
      isLoading: false,
      data: profile,
      form: profile,
      error: '',
      readonly: true,
    });
  });

  // TODO: test profileActions.setReadonly(); test profileActions.updateProfile(); test profileActions.cancelEdit()
});
