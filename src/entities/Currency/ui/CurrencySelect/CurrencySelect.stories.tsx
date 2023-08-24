import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Light = Template.bind({});
Light.args = {
  disabled: false,
};

export const Dark = Template.bind({});
Dark.args = {
  disabled: false,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightDisabled = Template.bind({});
LightDisabled.args = {
  disabled: true,
};

export const DarkDisabled = Template.bind({});
DarkDisabled.args = {
  disabled: true,
};
DarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];
