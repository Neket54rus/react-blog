import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

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
    expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(profile, ''))).toEqual({
      isLoading: false,
      data: profile,
      form: profile,
      error: '',
      readonly: true,
    });
  });

  test('Проверка отмены редактирования', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data: profile,
      form: {},
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data: profile,
      form: profile,
      validateErrors: undefined,
    });
  });

  test('Проверка обновления формы профиля', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: profile,
    };

    const newProfile: Profile = { ...profile, name: 'Ksy' };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(newProfile))).toEqual({
      form: newProfile,
    });
  });

  test('проверка обновления профиля', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: {},
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profile, ''))).toEqual({
      error: '',
      isLoading: false,
      data: profile,
      form: profile,
      readonly: true,
    });
  });
});
