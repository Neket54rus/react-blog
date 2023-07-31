import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { SidebarCollapseButton } from './SidebarCollapseButton';

export default {
	title: 'widgets/Sidebar/SidebarCollapseButton',
	component: SidebarCollapseButton,
	argTypes: {},
	args: {},
} as ComponentMeta<typeof SidebarCollapseButton>;

const Template: ComponentStory<typeof SidebarCollapseButton> = (args) => <SidebarCollapseButton {...args} />;

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
