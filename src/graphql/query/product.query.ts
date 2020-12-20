import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  query getProduct() {
    products() {
      id
      title 
      slug
      price
      discountInPercent
      image
    }
  }
`;
export const GET_PRODUCT_DETAILS = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      slug
      title
      unit
      price
      salePrice
      description
      discountInPercent
      image
    }
  }
`;
