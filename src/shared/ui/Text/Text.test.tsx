import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Text, TextSize, TextTheme, TextWeight } from './Text';

describe('Text', () => {
	test('Рендер компонента Text', () => {
		componentRender(<Text>Text</Text>);
		const text = screen.getByText('Text');
		expect(text).toBeInTheDocument();
	});

	test('Рендер компонента Text c пропсом size', () => {
		componentRender(<Text size={TextSize.L}>Text</Text>);
		const text = screen.getByText('Text');
		expect(text).toBeInTheDocument();
		expect(text).toHaveClass('l');
	});

	test('Рендер компонента Text c пропсом theme', () => {
		componentRender(<Text theme={TextTheme.ERROR}>Text</Text>);
		const text = screen.getByText('Text');
		expect(text).toBeInTheDocument();
		expect(text).toHaveClass('error');
	});

	test('Рендер компонента Text c пропсом weight', () => {
		componentRender(<Text weight={TextWeight.BLACK}>Text</Text>);
		const text = screen.getByText('Text');
		expect(text).toBeInTheDocument();
		expect(text).toHaveClass('black');
	});
});
