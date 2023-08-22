import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { selectUserAuthData } from './selectUserAuthData';

describe('entities/User/selectUserAuthData', () => {
    test('Проверка положительного результата', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'Nikita',
                    avatar: '',
                },
            },
        };
        const authData = selectUserAuthData(state as StateSchema);
        expect(authData).toEqual({ id: '1', username: 'Nikita', avatar: '' });
    });

    test('Проверка на пустой state', () => {
        const state: DeepPartial<StateSchema> = {};
        const authData = selectUserAuthData(state as StateSchema);
        expect(authData).toEqual(undefined);
    });
});
