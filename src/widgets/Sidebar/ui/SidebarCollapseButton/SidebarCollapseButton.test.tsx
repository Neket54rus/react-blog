import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { SidebarCollapseButton } from './SidebarCollapseButton';

describe('SidebarItem', () => {
	test('Рендер компонента SidebarCollapseButton', () => {
		componentRender(<SidebarCollapseButton />);
		const sidebarCollapseButton = screen.getByTestId('toggle-btn');
		expect(sidebarCollapseButton).toBeInTheDocument();
	});

	test('Рендер collapsed компонента SidebarCollapseButton', () => {
		componentRender(<SidebarCollapseButton collapsed />);
		const sidebarCollapseButton = screen.getByTestId('toggle-btn');
		expect(sidebarCollapseButton).toBeInTheDocument();
		expect(sidebarCollapseButton).toHaveClass('collapsed');
	});
});
