import React from "react";

import { AuthProvider } from "./useAuth";
import { LoadingProvider } from "./useLoading";

export interface IHookProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<IHookProps> = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>{children}</AuthProvider>
    </LoadingProvider>
  );
};
