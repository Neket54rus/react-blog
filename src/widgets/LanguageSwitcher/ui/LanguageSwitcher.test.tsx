import { screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

describe('LanguageSwitcher', () => {
	test('Рендер компонента LanguageSwitcher', () => {
		renderWithTranslation(<LanguageSwitcher />);
		const switcherBtn = screen.getByTestId('switcher-btn');
		expect(switcherBtn).toBeInTheDocument();
	});
});
