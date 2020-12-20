import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LayoutWrapper = styled.div`
  background-color: #f7f7f7;

  .reuseModalHolder {
    padding: 0;
    overflow: auto;
    border-radius: 3px 3px 0 0;
    border: 0;
  }
`;

export const Footer = styled.div`
  background-color: ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  text-align: center;
  padding: 1rem;
`;
