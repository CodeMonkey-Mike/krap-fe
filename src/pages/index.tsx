import React from 'react';
import Head from 'next/head';
import { Wrapper } from './about';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper>Welcome to Krapstack boilerplate!</Wrapper>
    </>
  );
};

export default Index;
