import React from 'react';
import { Button, Link } from 'src/atoms';
import { Routes } from 'src/contants';
import { Menu } from 'src/contants/Menu';
import { withApollo } from 'src/helper';
import { useAuth } from 'src/hooks';
import { Container, Left, Right } from './Style';

const Main = () => {
  const { isLoggedIn, onLogout } = useAuth();
  return (
    <Container>
      <Left>
        <Link label={Menu.Home} href={Routes.Home} />
      </Left>
      <Right>
        {!isLoggedIn ? (
          <>
            <Link label={Menu.Login} href={Routes.AuthLogin} />
            <Link label={Menu.Signup} href={Routes.AuthSignup} />
          </>
        ) : (
          <Button onClick={() => onLogout()} color="primary" variant="transparent">
            Logout
          </Button>
        )}
      </Right>
    </Container>
  );
};

const Header = withApollo(Main);

export { Header };
