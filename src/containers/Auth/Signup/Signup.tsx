import React, { useEffect, useContext } from 'react';
import { useMutation } from '@apollo/client';
import _get from 'lodash/get';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Button, Container, H2 } from 'src/atoms';
import { Alert } from 'antd';
import { useRouter } from 'next/router';
import { AuthContext } from 'src/contexts';
import { FieldWrapper, FormLabel, Text, Content, ErrorText } from './Style';
import { REGISTER } from 'src/graphql';
import { Routes } from 'src/contants';

type RegisterType = {
  email: string;
  username: string;
  password: string;
};

export const Signup = () => {
  const { dispatch } = useContext(AuthContext);
  const [UseRegister, { loading, error, data }] = useMutation(REGISTER, { errorPolicy: 'all' });
  const e = _get(error, 'graphQLErrors', []) || [];
  const route = useRouter();
  const onRegister = async (values: RegisterType) => {
    UseRegister({
      variables: {
        ...values,
        user_status_id: 1,
      },
    });
  };

  const initialValues = {
    email: '',
    username: '',
    password: '',
  };

  useEffect(() => {
    if (data && data.register && data.register.user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data.register.user,
      });
      route.push(Routes.Home);
    }
  }, [data, route, dispatch]);

  return (
    <Container flex loading={loading}>
      <Content>
        <H2 margin="0 0 var(--space-3)">Sign up</H2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onRegister(values);
          }}
          validationSchema={() => {
            return Yup.object().shape({
              email: Yup.string().required('Email is required!').email('Invalid email'),
              username: Yup.string().required('Username is Required!'),
              password: Yup.string().required('Password is Required!'),
            });
          }}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} method="post">
              <FieldWrapper>
                <FormLabel>Email</FormLabel>
                <div>
                  <Field name="email" type="text" value={values.email} />
                </div>
                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
              </FieldWrapper>
              <FieldWrapper>
                <FormLabel>Username</FormLabel>
                <div>
                  <Field name="username" type="text" value={values.username} />
                </div>
                {errors.username && touched.username && <ErrorText>{errors.username}</ErrorText>}
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
                color="default"
                variant="primary"
              >
                Sign up
              </Button>
            </Form>
          )}
        </Formik>
        <Text>
          Already have an account? <Link href="/login">Login</Link>
        </Text>
      </Content>
    </Container>
  );
};
