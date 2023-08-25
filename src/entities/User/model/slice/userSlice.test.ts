import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

describe('entities/User/userSlice', () => {
  test('Вход в аккаунт', () => {
    const state: UserSchema = {
      authData: undefined,
      _inited: false,
    };
    expect(
      userReducer(
        state,
        userActions.setAuthData({
          id: '1',
          username: 'Nikita',
          avatar: '',
        }),
      ),
    ).toEqual({ authData: { id: '1', username: 'Nikita', avatar: '' }, _inited: false });
  });

  test('Инициализация пользователя', () => {
    const state: UserSchema = {
      _inited: false,
    };

    expect(userReducer(state as UserSchema, userActions.initAuthData())).toEqual({
      _inited: true,
      authData: undefined,
    });
  });

  test('Выход из аккаунта', () => {
    const state: UserSchema = {
      authData: {
        id: '1',
        username: 'Nikita',
        avatar: '',
      },
      _inited: true,
    };
    expect(userReducer(state, userActions.logout())).toEqual({
      authData: undefined,
      _inited: true,
    });
  });
});
