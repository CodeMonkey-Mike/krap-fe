import styled from 'styled-components';

interface IText {
  width?: string;
  margin?: string;
  padding?: string;
  center?: boolean;
  size?: string;
  lineHeight?: number;
}

export const Text = styled.div<IText>`
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
`;

export const P = styled(Text)`
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-base)')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : 1)};
`;

export const H1 = styled(Text)`
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-5xl)')};
  font-weight: bold;
`;

export const H2 = styled(Text)`
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-lg)')};
  font-weight: bold;
`;

export const H3 = styled(Text)`
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-sm)')};
  font-weight: bold;
`;
