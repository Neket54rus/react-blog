import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
  args: { size: 128 },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {
  src: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg',
};

export const Dark = Template.bind({});
Dark.args = {
  src: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightPlug = Template.bind({});
LightPlug.args = {};

export const DarkPlug = Template.bind({});
DarkPlug.args = {};
DarkPlug.decorators = [ThemeDecorator(Theme.DARK)];
