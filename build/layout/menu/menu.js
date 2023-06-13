import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Theme from "@/styles/theme";
import LogoMarca from "@/assets/images/logo-marca.png";
import Logo from "@/assets/images/logo.png";
import { GraduateCapIcon, MedalIcon, RepeatIcon, StudentIcon } from "@/page/home/icons/home-icons";
import { DOCTOR_PATH, EGRESS_PATH, MASTER_PATH, STUDENT_PATH } from "@/routes/paths/paths.private";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import { useNavigate } from "react-router-dom";
import { Container, ExitCotainer, LogoContainer, MenuContainer, MenuIcon } from "./styles";
const Icons = [
    {
        Icon: StudentIcon,
        text: "1 - Aluno",
        path: STUDENT_PATH()
    },
    {
        Icon: GraduateCapIcon,
        text: "2 - Canditado de Doutorado",
        path: DOCTOR_PATH()
    },
    {
        Icon: MedalIcon,
        text: "3 - Canditado de Mestrado",
        path: MASTER_PATH()
    },
    {
        Icon: RepeatIcon,
        text: "4 - Egresso",
        path: EGRESS_PATH()
    }
];
const Menu = () => {
    const navigate = useNavigate();
    const onExit = () => navigate(INITIAL_PATH());
    const renderIcon = ({ Icon, path, text }) => {
        const isActive = location.pathname.includes(path);
        return (_jsxs(MenuIcon, { active: isActive, onClick: () => navigate(path), children: [_jsx(Icon, { size: 32, color: isActive ? Theme.colors.blue.blueDark : Theme.colors.white.white }), _jsx("span", { children: text })] }, text));
    };
    return (_jsxs(Container, { children: [_jsxs(LogoContainer, { children: [_jsx("img", { src: Logo, alt: "Logo UERJ" }), _jsx("img", { src: LogoMarca, alt: "Logo marca UERJ" })] }), _jsx(MenuContainer, { children: Icons.map((icon) => renderIcon(icon)) }), _jsxs(ExitCotainer, { children: [_jsx("span", {}), _jsx("p", { onClick: onExit, children: "Sair" })] })] }));
};
export default Menu;
//# sourceMappingURL=menu.js.map