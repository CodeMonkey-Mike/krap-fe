import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

// Wrap all components with a Theme Provider
const ThemeDecorator = (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
addDecorator(ThemeDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
