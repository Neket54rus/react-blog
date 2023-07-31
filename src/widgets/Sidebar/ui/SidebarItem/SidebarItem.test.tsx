import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { SidebarItem } from './SidebarItem';

describe('SidebarItem', () => {
	test('Рендер компонента Sidebar', () => {
		componentRender(<SidebarItem text="Home" to="/" />);
		const sidebarItem = screen.getByTestId('sidebarItem');
		expect(sidebarItem).toBeInTheDocument();
	});

	test('Рендер активного компонента Sidebar', () => {
		componentRender(<SidebarItem text="Home" to="/" active />);
		const sidebarItem = screen.getByTestId('sidebarItem');
		expect(sidebarItem).toBeInTheDocument();
		expect(sidebarItem).toHaveClass('active');
	});

	test('Рендер collapsed компонента Sidebar', () => {
		componentRender(<SidebarItem text="Home" to="/" collapsed />);
		const sidebarItem = screen.getByTestId('sidebarItem');
		expect(sidebarItem).toBeInTheDocument();
		expect(sidebarItem).toHaveClass('collapsed');
	});
});
