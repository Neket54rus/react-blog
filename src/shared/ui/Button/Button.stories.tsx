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

export const OutlineRedLight = Template.bind({});
OutlineRedLight.args = {
  theme: ButtonTheme.OUTLINE_RED,
};

export const OutlineRedDark = Template.bind({});
OutlineRedDark.args = {
  theme: ButtonTheme.OUTLINE_RED,
};
OutlineRedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineBlackLight = Template.bind({});
OutlineBlackLight.args = {
  theme: ButtonTheme.OUTLINE_BLACK,
};

export const OutlineBlackDark = Template.bind({});
OutlineBlackDark.args = {
  theme: ButtonTheme.OUTLINE_BLACK,
};
OutlineBlackDark.decorators = [ThemeDecorator(Theme.DARK)];

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

export const OutlineLightRedDisabled = Template.bind({});
OutlineLightRedDisabled.args = {
  theme: ButtonTheme.OUTLINE_RED,
  disabled: true,
};

export const OutlineDarkRedDisabled = Template.bind({});
OutlineDarkRedDisabled.args = {
  theme: ButtonTheme.OUTLINE_RED,
  disabled: true,
};
OutlineDarkRedDisabled.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLightBlackDisabled = Template.bind({});
OutlineLightBlackDisabled.args = {
  theme: ButtonTheme.OUTLINE_BLACK,
  disabled: true,
};

export const OutlineDarkBlackDisabled = Template.bind({});
OutlineDarkBlackDisabled.args = {
  theme: ButtonTheme.OUTLINE_BLACK,
  disabled: true,
};
OutlineDarkBlackDisabled.decorators = [ThemeDecorator(Theme.DARK)];
