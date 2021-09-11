import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Link, ILink } from './Link';

export default {
  title: 'Krap/Link',
  component: Link,
} as Meta;

const Template: Story<ILink> = (args: any) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'This is a link',
  href: '/',
  color: 'default',
  variant: 'primary',
  size: 'small',
};
