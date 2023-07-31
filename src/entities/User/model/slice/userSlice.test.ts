import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

describe('entities/User/userSlice', () => {
    test('Вход в аккаунт', () => {
        const state: UserSchema = {
            authData: undefined,
        };
        expect(
            userReducer(
                state,
                userActions.setAuthData({ id: '1', username: 'Nikita' }),
            ),
        ).toEqual({ authData: { id: '1', username: 'Nikita' } });
    });

    test('Выход из аккаунта', () => {
        const state: UserSchema = {
            authData: {
                id: '1',
                username: 'Nikita',
            },
        };
        expect(userReducer(state, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
