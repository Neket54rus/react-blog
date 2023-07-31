import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { selectLoginPassword } from './selectLoginPassword';

describe('selectLoginPassword', () => {
	test('Проверка положительного результата', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: '123',
			},
		};
		const password = selectLoginPassword(state as StateSchema);
		expect(password).toEqual('123');
	});

	test('Проверка на пустой state', () => {
		const state: DeepPartial<StateSchema> = {};
		const password = selectLoginPassword(state as StateSchema);
		expect(password).toEqual('');
	});
});
