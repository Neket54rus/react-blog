import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { Text, TextSize, TextTheme, TextWeight } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {},
	args: {
		children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatum.',
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightError = Template.bind({});
LightError.args = {
	theme: TextTheme.ERROR,
};

export const DarkError = Template.bind({});
DarkError.args = {
	theme: TextTheme.ERROR,
};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];

export const LightM = Template.bind({});
LightM.args = {
	size: TextSize.M,
};

export const DarkM = Template.bind({});
DarkM.args = {
	size: TextSize.M,
};
DarkM.decorators = [ThemeDecorator(Theme.DARK)];

export const LightL = Template.bind({});
LightL.args = {
	size: TextSize.L,
};

export const DarkL = Template.bind({});
DarkL.args = {
	size: TextSize.L,
};
DarkL.decorators = [ThemeDecorator(Theme.DARK)];

export const LightWeightBold = Template.bind({});
LightWeightBold.args = {
	weight: TextWeight.BOLD,
};

export const DarkWeightBold = Template.bind({});
DarkWeightBold.args = {
	weight: TextWeight.BOLD,
};
DarkWeightBold.decorators = [ThemeDecorator(Theme.DARK)];

export const LightWeightBlack = Template.bind({});
LightWeightBlack.args = {
	weight: TextWeight.BLACK,
};

export const DarkWeightBlack = Template.bind({});
DarkWeightBlack.args = {
	weight: TextWeight.BLACK,
};
DarkWeightBlack.decorators = [ThemeDecorator(Theme.DARK)];
