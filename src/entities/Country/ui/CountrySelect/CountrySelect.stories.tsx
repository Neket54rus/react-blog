import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
);

export const Light = Template.bind({});
Light.args = {
  disabled: false,
};

export const Dark = Template.bind({});
Dark.args = { disabled: false };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightDisabled = Template.bind({});
LightDisabled.args = {
  disabled: true,
};

export const DarkDisabled = Template.bind({});
DarkDisabled.args = { disabled: true };
DarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];
