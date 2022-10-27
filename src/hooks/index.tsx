import React from "react";

import { AuthProvider } from "./useAuth";
import { LoadingProvider } from "./useLoading";
import { ModalProvider } from "./useModal";

export interface IHookProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<IHookProps> = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </LoadingProvider>
  );
};
