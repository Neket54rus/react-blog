import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode, memo } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
	children?: ReactNode
	initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = memo((props: StoreProviderProps) => {
	const {
		children,
		initialState,
	} = props;

	const store = createReduxStore(initialState);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
});
