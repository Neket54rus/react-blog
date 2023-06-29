import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
	test('Рендер компонента Button', () => {
		render(<Button>Test</Button>);
		const testButton = screen.getByText('Test');
		expect(testButton).toBeInTheDocument();
	});

	test('Рендер компонента Button c темой CLEAR', () => {
		render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
		const testButton = screen.getByText('Test');
		expect(testButton).toHaveClass('clear');
	});

	test('Рендер компонента Button c темой OUTLINE', () => {
		render(<Button theme={ThemeButton.OUTLINE}>Test</Button>);
		const testButton = screen.getByText('Test');
		expect(testButton).toHaveClass('outline');
	});
});
