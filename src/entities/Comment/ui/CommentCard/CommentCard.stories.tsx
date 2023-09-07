import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {},
  args: {
    comment: {
      id: '1',
      text: 'Comment 1',
      user: {
        avatar: '',
        id: '1',
        username: 'admin',
      },
    },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightLoading = Template.bind({});
LightLoading.args = {
  isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
  isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];
