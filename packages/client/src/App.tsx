import React, { Fragment } from "react";
import { Content, Filters, Header, MyTable } from "./components";
import 'antd/dist/antd.css';
import { useQuery } from "@apollo/client";
import { POKEMONS } from "./graphql/queries/Pokemons";
import { Pokemons, PokemonsVariables } from "./graphql/queries/Pokemons/__generated__/Pokemons";

const App: React.FC = () => {
  const { loading, data, error, fetchMore, refetch } = useQuery<Pokemons, PokemonsVariables>(POKEMONS);

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (error) {
    return (
      <h1>Error fetching data...</h1>
    )
  }
  
  const nodes = (data!.pokemons!.edges!.map((edge: any) => edge.node));
  const pageInfo = data!.pokemons!.pageInfo;

  return (
    <Fragment>
      <Header />
      <Content>
        <Filters
          refetch={refetch}
        />
        <MyTable
          nodes={nodes}
          pageInfo={pageInfo}
          fetchMore={fetchMore}
          refetch={refetch}
        />
      </Content>
    </Fragment>
  );
}

export default App;