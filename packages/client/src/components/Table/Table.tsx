import { ApolloQueryResult } from '@apollo/client';
import { Button, Table, Tag } from 'antd';
import React from "react";
import { Pokemons, PokemonsVariables, Pokemons_pokemons_edges_node, Pokemons_pokemons_pageInfo } from "../../graphql/queries/Pokemons/__generated__/Pokemons";
import { typeToColor } from "../../helpers/typeToColor";
import "./style.css";

interface Props {
  nodes: Pokemons_pokemons_edges_node[]
  pageInfo: Pokemons_pokemons_pageInfo | null
  fetchMore: (props: any) => void
  refetch: (variables?: Partial<PokemonsVariables> | undefined) => Promise<ApolloQueryResult<Pokemons>>
}

export const MyTable = ({
  nodes,
  pageInfo,
  fetchMore,
  refetch
}: Props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Classification',
      dataIndex: 'classification',
      key: 'classification',
    },
    {
      title: 'Types',
      key: 'types',
      dataIndex: 'types',
      render: (types: string[]) => (
        <>
          {types.map(type => {
            let color = typeToColor(type);
            return (
              <Tag
                style={{cursor: "pointer"}}
                color={color}
                key={type}
                onClick={() => searchByType(type)}
              >
                {type.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const searchByType = (type: any) => {
    refetch({
      q: undefined,
      type: type
    })
  }
  
  const loadMore = () => {
    if (pageInfo!.hasNextPage) {
      fetchMore({
        variables: {
          after: pageInfo!.endCursor,
        },
      });
    }
    console.log(pageInfo!.endCursor);
  }

  return (
    <div className="table-container">
      <Table
        columns={columns}
        dataSource={nodes}
        pagination={false}
        rowKey={nodes => nodes.id}
      />
      {pageInfo!.hasNextPage &&
        <Button
          type="primary"
          onClick={loadMore}
          block
        >
          Load more
        </Button>}
    </div>
  )
}
