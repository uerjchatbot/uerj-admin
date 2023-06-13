import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Container } from "./styles";
import { PrivateRoutesComponents } from "@/routes/components/private.routes.components";
const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs(PrivateRoutesComponents);
    return (_jsx("div", { children: breadcrumbs
            .filter(({ match }) => match.pathname !== "/")
            .map(({ breadcrumb, match }) => (_jsx(Container, { children: _jsx(NavLink, { to: match.pathname, children: breadcrumb }) }, match.pathname))) }));
};
export default Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map