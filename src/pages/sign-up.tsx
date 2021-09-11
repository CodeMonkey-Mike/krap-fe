import React from 'react';
import { Signup } from 'src/containers';
import { withApollo } from 'src/helper';

const Main = () => <Signup />;

export default withApollo(Main);
