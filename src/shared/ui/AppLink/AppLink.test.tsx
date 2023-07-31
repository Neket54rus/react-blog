import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/shared/lib/tests/renderWithRouter/renderWithRouter';

import { AppLink } from './AppLink';

describe('AppLink', () => {
	test('Рендер компонента AppLink', () => {
		renderWithRouter(<AppLink to="/">Link</AppLink>);
		const appLink = screen.getByText('Link');
		expect(appLink).toBeInTheDocument();
	});

	test('Рендер активного компонента AppLink', () => {
		renderWithRouter(<AppLink to="/" active>Link</AppLink>);
		const appLink = screen.getByText('Link');
		expect(appLink).toBeInTheDocument();
		expect(appLink).toHaveClass('active');
	});
});
