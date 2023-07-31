import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Navbar } from './Navbar';

describe('Navbar', () => {
    test('Рендер компонента Navbar без авторизации', () => {
        componentRender(<Navbar />, {
            initialState: {
                user: {
                    authData: undefined,
                },
            },
        });
        const navbar = screen.getByTestId('navbar-non-authorization');
        expect(navbar).toBeInTheDocument();
    });

    test('Рендер компонента Navbar с авторизацией', () => {
        componentRender(<Navbar />, {
            initialState: {
                user: {
                    authData: {},
                },
            },
        });
        const navbar = screen.getByTestId('navbar-authorization');
        expect(navbar).toBeInTheDocument();
    });
});
