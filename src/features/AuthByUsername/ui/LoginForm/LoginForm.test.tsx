import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { loginReducer } from '../../model/slice/loginSlice';
import LoginForm from './LoginForm';

describe('features/AuthByUsername/LoginForm', () => {
    test('Рендер компонента LoginForm', () => {
        componentRender(<LoginForm />);
        const loginForm = screen.getByTestId('LoginForm');
        expect(loginForm).toBeInTheDocument();
    });

    test('Отображение ошибки', () => {
        componentRender(<LoginForm />, {
            initialState: {
                loginForm: {
                    error: 'error',
                },
            },
            asyncReducers: {
                loginForm: loginReducer,
            },
        });
        const errorText = screen.getByTestId('error-text');
        expect(errorText).toBeInTheDocument();
    });

    test('Заполненные input и btn=[disabled]', () => {
        componentRender(<LoginForm />);

        const inputName = screen.getByTestId('input-name');
        const inputPassword = screen.getByTestId('input-password');

        fireEvent.input(inputName, {
            target: {
                value: 'test',
            },
        });
        fireEvent.input(inputPassword, {
            target: {
                value: 'test',
            },
        });
        const btn = screen.getByTestId('submit-btn');
        expect(btn).not.toHaveAttribute('disabled');
        fireEvent.click(btn);
        expect(btn).toHaveAttribute('disabled');
    });
});
