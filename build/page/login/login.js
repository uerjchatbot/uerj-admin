import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "@/assets/images/logo.png";
import LogoMarca from "@/assets/images/logo-marca.png";
import { Container, LeftSide, RightSide, ContainerLogo, ContainerLogoMarca, ContainersLogos, TitleLogin } from "./styles";
import { FormLogin } from "@/page/login/form";
const Login = () => {
    return (_jsxs(Container, { children: [_jsx(LeftSide, { children: _jsxs(ContainersLogos, { children: [_jsx(ContainerLogoMarca, { children: _jsx("img", { src: LogoMarca, alt: "Logo Marca UERJ" }) }), _jsx(ContainerLogo, { children: _jsx("img", { src: Logo, alt: "Logo UERJ" }) })] }) }), _jsxs(RightSide, { children: [_jsx(TitleLogin, { children: "Login" }), _jsx(FormLogin, {})] })] }));
};
export default Login;
//# sourceMappingURL=login.js.map