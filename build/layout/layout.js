import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "@/layout/header";
import { Menu } from "@/layout/menu";
import { HOME_PATH } from "@/routes/paths/paths.private";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Container, Content } from "./styles";
const Layout = ({ children }) => {
    const location = useLocation();
    const canRenderMenu = useMemo(() => {
        return location.pathname !== HOME_PATH();
    }, [location.pathname]);
    return (_jsxs(Container, { children: [canRenderMenu && _jsx(Menu, {}), _jsxs(Content, { rendedMenu: canRenderMenu, children: [_jsx(Header, {}), children] })] }));
};
export default Layout;
//# sourceMappingURL=layout.js.map