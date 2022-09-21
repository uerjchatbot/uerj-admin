import { Header } from "@/layout/header";
import { Menu } from "@/layout/menu";
import { HOME_PATH } from "@/routes/paths/paths.private";
import React, { ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { Container, Content } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const canRenderMenu = useMemo(() => {
    return location.pathname !== HOME_PATH();
  }, [location.pathname]);

  return (
    <Container>
      {canRenderMenu && <Menu />}
      <Content rendedMenu={canRenderMenu}>
        <Header />
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
