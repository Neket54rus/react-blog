import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { selectLoginLoading } from './selectLoginLoading';

describe('selectLoginLoading', () => {
	test('Проверка положительного результата', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
			},
		};
		const isLoading = selectLoginLoading(state as StateSchema);
		expect(isLoading).toEqual(true);
	});

	test('Проверка на пустой state', () => {
		const state: DeepPartial<StateSchema> = {};
		const isLoading = selectLoginLoading(state as StateSchema);
		expect(isLoading).toEqual(false);
	});
});
