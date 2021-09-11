import React from 'react';
import styled from 'styled-components';
import Instance from 'next/link';

export interface ILink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  iconClass?: string;
  onClick?: () => void;
}

const OuterLink = styled.div``;

export const Link = ({ href, label, className, ...props }: ILink) => (
  <OuterLink className={className} {...props}>
    <Instance href={href}>{label}</Instance>
  </OuterLink>
);
