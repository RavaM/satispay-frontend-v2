import { SearchOutlined } from "@ant-design/icons";
import { ApolloQueryResult } from "@apollo/client";
import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { Pokemons, PokemonsVariables } from "../../graphql/queries/Pokemons/__generated__/Pokemons";
import "./style.css";

interface Props {
  refetch: (variables?: Partial<PokemonsVariables> | undefined) => Promise<ApolloQueryResult<Pokemons>>
}

export const Filters = ({
  refetch
}: Props) => {
  const [textFilter, setTextFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleSearch = () => {
    refetch({
      q: textFilter || undefined,
      type: typeFilter || undefined
    })
  }

  return (
    <Form>
      <div className="filter">
          <div className="switch-option-container">
            <Form.Item label="Search by Name">
              <Input
                onChange={(e) => setTextFilter(e.target.value)}
                value={textFilter}
                allowClear
              />
            </Form.Item>
          </div>
          <div className="switch-option-container">
            <Form.Item label="Filter by Type">
              <Input
                onChange={(e) => setTypeFilter(e.target.value)}
                value={typeFilter}
                allowClear
              />
            </Form.Item>
            
          </div>
        <Button
          className="search-button"
          type="primary"
          icon={<SearchOutlined />}
          onClick={() => handleSearch()}
        />
      </div>
    </Form>
  )
}
