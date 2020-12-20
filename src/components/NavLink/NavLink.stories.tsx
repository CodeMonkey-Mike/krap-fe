import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NavLink, { NavLinkProps } from './NavLink';

export default {
  title: 'Krap/NavLink',
  component: NavLink,
} as Meta;

const Template: Story<NavLinkProps> = (args: any) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'This is a link',
  href: '/',
  color: 'default',
  variant: 'primary',
  size: 'small',
};
