import Layout from "@/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";

interface IWrapperRoute {
  redirect?: string;
  isPrivate?: boolean;
}

const WrapperRoute: React.FC<IWrapperRoute> = ({ isPrivate, redirect = "/" }) => {
  if (isPrivate) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }

  return <Outlet />;
};

export default WrapperRoute;
