import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
	test('Рендер компонента Input', () => {
		render(<Input value="input" />);
		const input = screen.getByDisplayValue('input');
		expect(input).toBeInTheDocument();
	});
});
