import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {
	test('Рендер компонента Modal', () => {
		render(<Modal>Modal</Modal>);
		const modal = screen.getByText('Modal');
		expect(modal).toBeInTheDocument();
	});
});
