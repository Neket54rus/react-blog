import { screen } from '@testing-library/react';

import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { PageError } from './PageError';

describe('PageError', () => {
	test('Рендер компонента PageError', () => {
		renderWithTranslation(<PageError />);
		const pageErrorText = screen.getByText('Произошла непредвиденная ошибка');
		expect(pageErrorText).toBeInTheDocument();
		const pageErrorBtn = screen.getByText('Обновить страницу');
		expect(pageErrorBtn).toBeInTheDocument();
	});
});
