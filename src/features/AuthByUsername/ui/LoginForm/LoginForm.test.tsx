import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import LoginForm from './LoginForm';

describe('features/AuthByUsername/LoginForm', () => {
    test('Рендер компонента LoginForm', () => {
        componentRender(<LoginForm />);
        const loginForm = screen.getByTestId('LoginForm');
        expect(loginForm).toBeInTheDocument();
    });
});
