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

export const QUERY_BOOK = gql`
  query Book($name: String, $isbn: String) {
    book(name: $name, ISBN: $isbn) {
      id
      name
      createAt
      authorAndPublish {
        authorName
        publishName
      }
    }
  }
`;

export const QUERY_BOOK_EXISTS = gql`
  query Query($isbn: String!) {
    searchBook(ISBN: $isbn)
  }
`;

export const MUTATION_CREATE_AUTHOR = gql`
  mutation CreateAuthor($input: CreateAuthorInput!) {
    createAuthor(input: $input) {
      id
      name
    }
  }
`;

export const MUTATION_CREATE_PUBLISH = gql`
  mutation CreatePublish($input: String!) {
    createPublish(input: $input) {
      id
      name
    }
  }
`;

export const MUTATION_CREATE_BOOK = gql`
  mutation Mutation($input: BookInput!) {
    createBook(input: $input) {
      id
      name
    }
  }
`;
