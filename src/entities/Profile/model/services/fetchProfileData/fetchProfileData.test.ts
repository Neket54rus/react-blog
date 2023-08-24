import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Profile } from '../../types/profile';
import { fetchProfileData } from './fetchProfileData';

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

describe('entities/Profile/fetchProfileData', () => {
  test('Проверка положительного результата', async () => {
    const data: Profile = profile;

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockResolvedValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(data);
  });

  // TODO:
  // test('Проверка запроса с ошибкой', async () => {
  //   const thunk = new TestAsyncThunk(fetchProfileData);
  //   thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
  //   const result = await thunk.callThunk();

  //   expect(thunk.api.get).toHaveBeenCalled();
  //   expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('error');
  // });
});
