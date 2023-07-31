import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginUsername', () => {
	test('Проверка положительного результата', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'Nikita',
			},
		};
		const name = selectLoginUsername(state as StateSchema);
		expect(name).toEqual('Nikita');
	});

	test('Проверка на пустой state', () => {
		const state: DeepPartial<StateSchema> = {};
		const name = selectLoginUsername(state as StateSchema);
		expect(name).toEqual('');
	});
});
