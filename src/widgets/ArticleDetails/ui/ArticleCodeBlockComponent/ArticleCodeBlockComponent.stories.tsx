import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
  title: 'widgets/ArticleDetails/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  argTypes: {},
  args: {
    block: {
      id: '2',
      type: 'CODE',
      code: "const text = 'Hello, world!';\n\nfunction logHello(text) {\n    console.log(text);\n}\n\nlogHello(text);",
    },
  },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
