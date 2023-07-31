import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('Рендер компонента Sidebar', () => {
		componentRender(<Sidebar />);
		const sidebar = screen.getByTestId('sidebar');
		expect(sidebar).toBeInTheDocument();
	});

	test('Рендер компонента Sidebar с классом collapsed', () => {
		componentRender(<Sidebar />);
		const toggleBtn = screen.getByTestId('toggle-btn');
		fireEvent.click(toggleBtn);
		const sidebar = screen.getByTestId('sidebar');
		expect(sidebar).toHaveClass('collapsed');
	});
});
