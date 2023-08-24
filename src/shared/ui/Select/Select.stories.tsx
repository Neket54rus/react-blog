import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
  args: {
    options: [
      { value: '123', content: '123' },
      { value: '321', content: '321' },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

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
