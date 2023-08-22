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
                userActions.setAuthData({
                    id: '1',
                    username: 'Nikita',
                    avatar: '',
                }),
            ),
        ).toEqual({ authData: { id: '1', username: 'Nikita', avatar: '' } });
    });

    test('Выход из аккаунта', () => {
        const state: UserSchema = {
            authData: {
                id: '1',
                username: 'Nikita',
                avatar: '',
            },
        };
        expect(userReducer(state, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
