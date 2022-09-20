import { gql } from "@apollo/client";

export const QUERY_BOOKS = gql`
  query Books {
    books {
      ... on BooksSuccessResult {
        books {
          id
          name
          authorAndPublish {
            authorName
            publishName
          }
        }
      }
    }
  }
`;

export const QUERY_AUTHORS = gql`
  query Authors {
    authors {
      id
      name
    }
  }
`;
