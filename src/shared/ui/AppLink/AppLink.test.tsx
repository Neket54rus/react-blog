import { screen } from '@testing-library/react';

import { renderWithRouter } from 'shared/lib/tests/renderWithRouter/renderWithRouter';
import { AppLink } from 'shared/ui/AppLink/AppLink';

describe('AppLink', () => {
	test('Рендер компонента AppLink', () => {
		renderWithRouter(<AppLink to="/">Link</AppLink>);
		const appLink = screen.getByText('Link');
		expect(appLink).toBeInTheDocument();
	});
});
