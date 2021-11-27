import React from "react";
import { Layout } from "antd";
import "./style.css";

export const Header: React.FC = () => {
  const { Header } = Layout;

  return (
    <Header className="header">
      <h1 className="logo">
        Pokemon
      </h1>
    </Header>
  )
}
