import { render, screen } from '@testing-library/react';

import { Loader } from 'shared/ui/Loader/Loader';

describe('Loader', () => {
	test('Рендер компонента Loader', () => {
		render(<Loader />);
		const loader = screen.getByTestId('loader');
		expect(loader).toBeInTheDocument();
	});
});
