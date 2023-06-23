import { PrivateRoutesComponents } from "@/routes/components/private.routes.components";
import { PublicRoutesComponents } from "@/routes/components/public.routes.components";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import WrapperRoute from "@/routes/route.wrapper";
import React from "react";

import { BrowserRouter, Navigate, Route, Routes as Router } from "react-router-dom";

const RoutesComponent: React.FC = () => {
  const renderPrivateRoutes = () => {
    return PrivateRoutesComponents.map(({ Component, path }) => {
      return <Route path={path} element={<Component />} key={path} />;
    });
  };

  const renderPublicRoutesComponents = () => {
    return PublicRoutesComponents.map(({ Component, path }) => {
      return <Route path={path} element={<Component />} key={path} />;
    });
  };

  return (
    <BrowserRouter>
      <Router>
        <Route element={<WrapperRoute redirect={INITIAL_PATH()} isPrivate={true} />}>
          {renderPrivateRoutes()}
        </Route>
        <Route element={<WrapperRoute redirect={INITIAL_PATH()} isPrivate={false} />}>
          {renderPublicRoutesComponents()}
        </Route>

        <Route path="*" element={<Navigate replace to="/" />} />
      </Router>
    </BrowserRouter>
  );
};

export default RoutesComponent;
