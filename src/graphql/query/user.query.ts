import { gql } from '@apollo/client';

export const LOGGED_IN = gql`
  query getUser($id: String = "1") {
    me(id: $id) {
      id
      name
      username
      email
    }
  }
`;
