import { render, screen } from '@testing-library/react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

describe('ThemeSwitcher', () => {
	test('Рендер компонента ThemeSwitcher', () => {
		render(<ThemeSwitcher />);
		const switcherBtn = screen.getByTestId('switcher-btn');
		expect(switcherBtn).toBeInTheDocument();
	});
});
