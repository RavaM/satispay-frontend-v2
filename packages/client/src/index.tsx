import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { relayStylePagination } from "@apollo/client/utilities";
import "./style.css";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: relayStylePagination(),
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);