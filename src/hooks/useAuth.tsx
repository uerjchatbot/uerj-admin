import React, { createContext, useContext, useState } from "react";

import { api } from "@/services/api";

import { useLocalStorage } from "@/hooks/useLocalStorage";
// import { useNavigate } from "react-router-dom";
import { ILoginFormData, ILoginResponseData } from "@/models/login";
import { LoginService } from "@/services/login.service";

interface IAuthProps {
  children: React.ReactNode;
}

interface IAuthContextData {
  userData: any;
  handleLogin: any;
  handleLogout: any;
}

const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: IAuthProps) => {
  const [localUserData, setLocalUserData] = useLocalStorage({
    key: "userData",
    initialValue: {} as ILoginResponseData
  });

  const [userData, setUserData] = useState<ILoginResponseData>(localUserData);

  api.defaults.headers.common = {
    Authorization: `Bearer ${userData.token}`
  };

  const handleLogin = async (formData: ILoginFormData): Promise<void> => {
    try {
      const { data } = await LoginService.login(formData);

      setLocalUserData({ token: data.token });

      setUserData(() => ({
        token: data.token
      }));
    } catch (error) {
      throw new Error("Auth Failed");
    }
  };

  const handleLogout = (): void => {
    setUserData({} as ILoginResponseData);

    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        handleLogin,
        handleLogout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa ser usado com um AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
