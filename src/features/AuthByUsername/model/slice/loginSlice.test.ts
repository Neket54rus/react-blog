import { LoginSchema } from '../types/login';
import { loginActions, loginReducer } from './loginSlice';

describe('features/AuthByUsername/loginSlice', () => {
    test('Установка имени пользователя', () => {
        const state: LoginSchema = {
            username: '',
        };
        expect(loginReducer(state, loginActions.setUsername('Nikita'))).toEqual(
            { username: 'Nikita' },
        );
    });

    test('Установка пароля пользователя', () => {
        const state: LoginSchema = {
            password: '',
        };
        expect(loginReducer(state, loginActions.setPassword('123'))).toEqual({
            password: '123',
        });
    });
});
