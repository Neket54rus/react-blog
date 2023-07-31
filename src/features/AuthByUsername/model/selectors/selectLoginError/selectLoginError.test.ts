import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { selectLoginError } from './selectLoginError';

describe('selectLoginError', () => {
	test('Проверка положительного результата', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: 'Error',
			},
		};
		const isLoading = selectLoginError(state as StateSchema);
		expect(isLoading).toEqual('Error');
	});

	test('Проверка на пустой state', () => {
		const state: DeepPartial<StateSchema> = {};
		const isLoading = selectLoginError(state as StateSchema);
		expect(isLoading).toEqual('');
	});
});
