import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country, Currency } from '@/shared/const/common';
import { Theme } from '@/shared/lib/useTheme/ThemeContext';

import { Profile } from '../../model/types/profile';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

const profile: Profile = {
  name: 'Никита',
  lastname: 'Евдокимов',
  age: 21,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar:
    'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg',
};

export const LightLoading = Template.bind({});
LightLoading.args = {
  isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
  isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const LightReadonly = Template.bind({});
LightReadonly.args = {
  readonly: true,
  data: profile,
};

export const DarkReadonly = Template.bind({});
DarkReadonly.args = {
  readonly: true,
  data: profile,
};

export const LightEditable = Template.bind({});
LightEditable.args = {
  readonly: false,
  data: profile,
};

export const DarkEditable = Template.bind({});
DarkEditable.args = {
  readonly: false,
  data: profile,
};
