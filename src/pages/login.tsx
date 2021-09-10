import React from 'react';
import { Login } from 'src/containers';
import { withApollo } from 'src/helper';

const Main = () => <Login />;

export default withApollo(Main);
