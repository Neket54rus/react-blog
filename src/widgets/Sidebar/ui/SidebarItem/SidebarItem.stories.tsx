import { ComponentMeta, ComponentStory } from '@storybook/react';

import HomeIcon from '@/shared/assets/icons/icon-main.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { SidebarItem } from './SidebarItem';

export default {
  title: 'widgets/Sidebar/SidebarItem',
  component: SidebarItem,
  argTypes: {},
  args: {
    to: '/',
    text: 'Home',
    Icon: HomeIcon,
  },
  decorators: [
    StoreDecorator({
      user: { authData: { id: '1', username: 'admin', avatar: '' } },
    }),
  ],
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => (
  <SidebarItem {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightCollapsed = Template.bind({});
LightCollapsed.args = {
  collapsed: true,
};

export const DarkCollapsed = Template.bind({});
DarkCollapsed.args = {
  collapsed: true,
};
DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK)];

export const LightActive = Template.bind({});
LightActive.args = {
  active: true,
};

export const DarkActive = Template.bind({});
DarkActive.args = {
  active: true,
};
DarkActive.decorators = [ThemeDecorator(Theme.DARK)];

export const LightCollapsedActive = Template.bind({});
LightCollapsedActive.args = {
  active: true,
  collapsed: true,
};

export const DarkCollapsedActive = Template.bind({});
DarkCollapsedActive.args = {
  active: true,
  collapsed: true,
};
DarkCollapsedActive.decorators = [ThemeDecorator(Theme.DARK)];
