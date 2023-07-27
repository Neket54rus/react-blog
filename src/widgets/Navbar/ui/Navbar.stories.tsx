import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/useTheme/ThemeContext';

import { Navbar } from './Navbar';

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {},
	args: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightAuthorization = Template.bind({});
LightAuthorization.args = {
	isAuth: true,
};

export const DarkAuthorization = Template.bind({});
DarkAuthorization.args = {
	isAuth: true,
};
DarkAuthorization.decorators = [ThemeDecorator(Theme.DARK)];