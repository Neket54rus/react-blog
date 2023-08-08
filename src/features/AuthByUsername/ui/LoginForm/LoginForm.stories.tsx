import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import LoginForm from './LoginForm';

export default {
    title: 'features/AuthByUsername/LoginForm',
    component: LoginForm,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const LightLoading = Template.bind({});
LightLoading.args = {};
LightLoading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];

export const LightError = Template.bind({});
LightError.args = {};
LightError.decorators = [
    StoreDecorator({
        loginForm: {
            error: 'Произошла ошибка',
        },
    }),
];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            error: 'Произошла ошибка',
        },
    }),
];
