import { render, screen } from '@testing-library/react';

import { PageLoader } from './PageLoader';

describe('PageLoader', () => {
	test('Рендер компонента PageLoader', () => {
		render(<PageLoader />);
		const pageLoader = screen.getByTestId('page-loader');
		expect(pageLoader).toBeInTheDocument();
	});
});
