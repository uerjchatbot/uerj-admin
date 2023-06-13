import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProfileImage from "@/assets/images/logo-ppgedu.png";
import { Container, Content, TitleContainer, UserContainer, UserContent, ImageContainer } from "./styles";
import { Breadcrumb } from "@/layout/header/breadcrumb";
const Header = () => {
    return (_jsx(Container, { children: _jsxs(Content, { children: [_jsx(TitleContainer, { children: _jsx(Breadcrumb, {}) }), _jsxs(UserContainer, { children: [_jsx(ImageContainer, { children: _jsx("img", { src: ProfileImage, alt: "Imagem de perfil do usu\u00E1rio" }) }), _jsx(UserContent, { children: _jsxs("span", { children: ["Bem-vindo(a), ", _jsx("br", {}), " Usu\u00E1rio(a) PPGedu"] }) })] })] }) }));
};
export default Header;
//# sourceMappingURL=header.js.map