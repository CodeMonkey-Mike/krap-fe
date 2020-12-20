import React from 'react';
import { useRouter } from 'next/router';
import Header from '../Header/Header';
import { LayoutWrapper, Footer } from './Layout.style';

type LayoutProps = {
  className?: string;
  token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ className, children, token }) => {
  const { pathname } = useRouter();

  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <Header className={`home`} token={token} pathname={pathname} />
      {children}
      <Footer>@Copyright 2020</Footer>
    </LayoutWrapper>
  );
};

export default Layout;
