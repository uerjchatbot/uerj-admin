import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import { Container } from "./styles";

import { PrivateRoutesComponents } from "@/routes/components/private.routes.components";

const Breadcrumb: React.FC = () => {
  const breadcrumbs = useBreadcrumbs(PrivateRoutesComponents);
  return (
    <div>
      {breadcrumbs
        .filter(({ match }) => match.pathname !== "/")
        .map(({ breadcrumb, match }) => (
          <Container key={match.pathname}>
            <NavLink to={match.pathname}>{breadcrumb}</NavLink>
          </Container>
        ))}
    </div>
  );
};

export default Breadcrumb;
