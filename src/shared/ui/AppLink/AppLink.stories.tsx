import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { AppLink } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	argTypes: {},
	args: {
		to: '/',
		children: 'Link',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ActiveLight = Template.bind({});
ActiveLight.args = {
	active: true,
};

export const ActiveDark = Template.bind({});
ActiveDark.args = {
	active: true,
};
ActiveDark.decorators = [ThemeDecorator(Theme.DARK)];
