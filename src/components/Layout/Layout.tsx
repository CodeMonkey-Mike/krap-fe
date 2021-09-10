import React from 'react';
import { Container } from 'src/atoms';
import { Header } from '../Header';

interface ILayout {
  children: any;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      {
        // @ts-ignore
        <Header />
      }
      {children}
    </Container>
  );
};
