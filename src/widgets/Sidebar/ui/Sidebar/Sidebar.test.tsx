import { fireEvent, render, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
	test('Рендер компонента Sidebar', () => {
		render(<Sidebar />);
		const sidebar = screen.getByTestId('sidebar');
		expect(sidebar).toBeInTheDocument();
	});

	test('Рендер компонента Sidebar с классом collapsed', () => {
		render(<Sidebar />);
		const toggleBtn = screen.getByTestId('toggle-btn');
		fireEvent.click(toggleBtn);
		const sidebar = screen.getByTestId('sidebar');
		expect(sidebar).toHaveClass('collapsed');
	});
});
