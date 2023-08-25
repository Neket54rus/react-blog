import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Profile, ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

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

describe('entities/Profile/updateProfileData', () => {
  test('Проверка положительного результата', async () => {
    const data: Profile = profile;

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('Проверка запроса с серверной ошибкой', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('Проверка запроса с валидационной ошибкой', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profile, name: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
