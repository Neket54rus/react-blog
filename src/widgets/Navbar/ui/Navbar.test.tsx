import { screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { Navbar } from './Navbar';

describe('Navbar', () => {
	test('Рендер компонента Navbar', () => {
		renderWithTranslation(<Navbar />);
		const navbar = screen.getByTestId('navbar');
		expect(navbar).toBeInTheDocument();
	});
});
