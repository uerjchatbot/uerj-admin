import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import localStorageService from "@/services/local-storage/local-storage.service";
import { AuthKeysEnum } from "@/types/enum/auth.enum";
import Layout from "@/layout/layout";
const WrapperRoute = ({ isPrivate, redirect = "/" }) => {
    const token = localStorageService.getAuthData(AuthKeysEnum.AUTH_TOKEN);
    // if (!token && isPrivate) {
    //   return <Navigate replace to={redirect} />;
    // }
    if (isPrivate) {
        return (_jsx(Layout, { children: _jsx(Outlet, {}) }));
    }
    return _jsx(Outlet, {});
};
export default WrapperRoute;
//# sourceMappingURL=route.wrapper.js.map