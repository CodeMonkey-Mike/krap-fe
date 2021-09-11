import React, { useEffect } from 'react';
import _get from 'lodash/get';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { Alert } from 'antd';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { LOGIN } from 'src/graphql';
import { Button, Container, H2 } from 'src/atoms';
import { useRouter } from 'next/router';
import { AuthContext } from 'src/contexts';
import { FieldWrapper, FormLabel, Text, Content, ErrorText } from './Style';
import { Routes } from 'src/contants';

type LoginType = {
  usernameOrEmail: string;
  password: string;
};

const initialValues = {
  usernameOrEmail: '',
  password: '',
};

export const Login = () => {
  const route = useRouter();
  const { dispatch } = React.useContext(AuthContext);
  const [UseLogin, { data, error, loading }] = useMutation(LOGIN, { errorPolicy: 'all' });

  const e = _get(error, 'graphQLErrors', []) || [];

  const onLogin = (values: LoginType) => {
    UseLogin({
      variables: {
        ...values,
      },
    });
  };

  useEffect(() => {
    if (data && data.login && data.login.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.login.user });
      route.push(Routes.Home);
    }
  }, [data, route, dispatch]);

  return (
    <Container loading={loading} flex>
      <Content>
        <H2 margin="0 0 var(--space-3)">Login</H2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onLogin(values);
          }}
          validationSchema={() => {
            return Yup.object().shape({
              usernameOrEmail: Yup.string().required('Username is Required!'),
              password: Yup.string().required('Password is Required!'),
            });
          }}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} method="post">
              <FieldWrapper>
                <FormLabel>Username / Email</FormLabel>
                <div>
                  <Field name="usernameOrEmail" type="text" value={values.usernameOrEmail} />
                </div>
                {errors.usernameOrEmail && touched.usernameOrEmail && (
                  <ErrorText>{errors.usernameOrEmail}</ErrorText>
                )}
              </FieldWrapper>
              <FieldWrapper>
                <FormLabel>Password</FormLabel>
                <div>
                  <Field name="password" type="password" value={values.password} />
                </div>
                {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
              </FieldWrapper>
              {!!e.length && (
                <FieldWrapper>
                  <Alert message={e[0].message} type="error" />
                </FieldWrapper>
              )}
              <Button
                disabled={isSubmitting && !!Object.values(errors).length}
                size="small"
                variant="primary"
                color="default"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Text center>
          Don't have an account? <Link href="/sign-up">Sign up.</Link>
        </Text>
      </Content>
    </Container>
  );
};
