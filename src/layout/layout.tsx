import { Header } from "@/layout/header";
import React, { ReactNode } from "react";

import { Container, Content } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
