import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation register($email: String!, $username: String!, $password: String!) {
    register(options: { email: $email, username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($usernameOrEmail: String!, $password: String!) {
    login(options: { usernameOrEmail: $usernameOrEmail, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
        email
      }
    }
  }
`;
