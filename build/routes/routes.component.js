import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PrivateRoutesComponents } from "@/routes/components/private.routes.components";
import { PublicRoutesComponents } from "@/routes/components/public.routes.components";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import WrapperRoute from "@/routes/route.wrapper";
import { BrowserRouter, Routes as Router, Route, Navigate } from "react-router-dom";
const RoutesComponent = () => {
    const renderPrivateRoutes = () => {
        return PrivateRoutesComponents.map(({ Component, path }) => {
            return _jsx(Route, { path: path, element: _jsx(Component, {}) }, path);
        });
    };
    const renderPublicRoutesComponents = () => {
        return PublicRoutesComponents.map(({ Component, path }) => {
            return _jsx(Route, { path: path, element: _jsx(Component, {}) }, path);
        });
    };
    return (_jsx(BrowserRouter, { children: _jsxs(Router, { children: [_jsx(Route, { element: _jsx(WrapperRoute, { redirect: INITIAL_PATH(), isPrivate: true }), children: renderPrivateRoutes() }), _jsx(Route, { element: _jsx(WrapperRoute, { redirect: INITIAL_PATH(), isPrivate: false }), children: renderPublicRoutesComponents() }), _jsx(Route, { path: "*", element: _jsx(Navigate, { replace: true, to: "/" }) })] }) }));
};
export default RoutesComponent;
//# sourceMappingURL=routes.component.js.map