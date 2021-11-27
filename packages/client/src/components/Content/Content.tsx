import React from "react";
import { Layout } from "antd";

export const Content: React.FC = ({ children }) => {
  const { Content } = Layout;

  return (
    <Content>
      {children}
    </Content>
  )
}
