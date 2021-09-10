import React from 'react';
import Head from 'next/head';
import { Container, P } from 'src/atoms';
import { useAuth } from 'src/hooks';

const Main: React.FC = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
      <Head>
        <title>KRAPSTACK</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Container paddingTop="50px">
        <P center>
          Welcome <b>{isLoggedIn && user.username}</b> to Krapstack boilerplate!
        </P>
      </Container>
    </>
  );
};

export default Main;
