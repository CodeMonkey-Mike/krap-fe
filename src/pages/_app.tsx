import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/theme';
import { GlobalStyle } from 'src/theme';
import { Layout } from 'src/components';
import 'antd/dist/antd.css';
import { AuthProvider } from 'src/contexts';

export default function NextApp({ Component, pageProps }: AppProps & any) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}
