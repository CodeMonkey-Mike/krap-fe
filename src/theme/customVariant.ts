import { variant } from 'styled-system';

const buttonStyle = variant({
  key: 'buttonStyles',
  prop: 'variant',
});

const colorStyle = variant({
  key: 'colorStyles',
  prop: 'color',
});

const buttonSize = variant({
  key: 'buttonSize',
  prop: 'size',
});

export { buttonStyle, colorStyle, buttonSize };
