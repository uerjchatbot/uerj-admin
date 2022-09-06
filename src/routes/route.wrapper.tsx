import { Route, Navigate, Outlet } from "react-router-dom";
import localStorageService from "@/services/local-storage/local-storage.service";
import { AuthKeysEnum } from "@/types/enum/auth.enum";

interface IWrapperRoute {
  redirect?: string;
  isPrivate?: boolean;
}

const WrapperRoute: React.FC<IWrapperRoute> = ({
  isPrivate,
  redirect = "/",
}) => {
  const token = localStorageService.getAuthData(AuthKeysEnum.AUTH_TOKEN);

  if (!token && isPrivate) {
    return <Navigate replace to={redirect} />;
  }

  return <Outlet />;
};

export default WrapperRoute;
