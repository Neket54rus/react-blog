import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {},
  args: {
    comments: [
      {
        id: '1',
        text: 'Comment 1',
        user: {
          avatar: '',
          id: '1',
          username: 'admin',
        },
      },
      {
        id: '2',
        text: 'Comment 2',
        user: {
          avatar: '',
          id: '1',
          username: 'admin',
        },
      },
      {
        id: '3',
        text: 'Comment 3',
        user: {
          avatar: '',
          id: '1',
          username: 'admin',
        },
      },
    ],
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightNoComments = Template.bind({});
LightNoComments.args = {
  comments: undefined,
};

export const DarkNoComments = Template.bind({});
DarkNoComments.args = {
  comments: undefined,
};
DarkNoComments.decorators = [ThemeDecorator(Theme.DARK)];
