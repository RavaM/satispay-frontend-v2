/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pokemons
// ====================================================

export interface Pokemons_pokemons_edges_node {
  __typename: "Pokemon";
  id: string;
  name: string | null;
  types: (string | null)[] | null;
  classification: string | null;
}

export interface Pokemons_pokemons_edges {
  __typename: "PokemonEdge";
  cursor: string;
  node: Pokemons_pokemons_edges_node | null;
}

export interface Pokemons_pokemons_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean | null;
}

export interface Pokemons_pokemons {
  __typename: "PokemonsConnection";
  edges: (Pokemons_pokemons_edges | null)[] | null;
  pageInfo: Pokemons_pokemons_pageInfo | null;
}

export interface Pokemons {
  pokemons: Pokemons_pokemons | null;
}

export interface PokemonsVariables {
  q?: string | null;
  type?: string | null;
  after?: string | null;
  limit?: number | null;
}
