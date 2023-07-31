import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { Button, ButtonTheme } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {},
	args: {
		children: 'button',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearLight = Template.bind({});
ClearLight.args = {
	theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
	theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
	theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLightDisabled = Template.bind({});
ClearLightDisabled.args = {
	theme: ButtonTheme.CLEAR,
	disabled: true,
};

export const ClearDarkDisabled = Template.bind({});
ClearDarkDisabled.args = {
	theme: ButtonTheme.CLEAR,
	disabled: true,
};
ClearDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLightDisabled = Template.bind({});
OutlineLightDisabled.args = {
	theme: ButtonTheme.OUTLINE,
	disabled: true,
};

export const OutlineDarkDisabled = Template.bind({});
OutlineDarkDisabled.args = {
	theme: ButtonTheme.OUTLINE,
	disabled: true,
};
OutlineDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];
