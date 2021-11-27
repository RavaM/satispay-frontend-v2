import { gql } from "apollo-boost";

export const POKEMONS = gql`
  query Pokemons($q: String, $type: String, $after: ID, $limit: Int) {
    pokemons(q: $q, type: $type, after: $after, limit: $limit) {
      edges {
        cursor
        node {
          id
          name
          types
          classification
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;