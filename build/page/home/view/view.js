import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/button";
import { useNavigate } from "react-router-dom";
// import { EditorText } from "@/components/editor/main";
import { HOME_PATH } from "@/routes/paths/paths.private";
import { ButtonContainer, Container, Content } from "./styles";
const ViewHome = () => {
    const navigate = useNavigate();
    const onBack = () => navigate(HOME_PATH());
    return (_jsxs(Container, { children: [_jsx(ButtonContainer, { children: _jsx(Button, { outline: true, onClick: onBack, type: "button", children: "Cancelar" }) }), _jsx(Content, {}), _jsx(ButtonContainer, { children: _jsx(Button, { outline: true, onClick: onBack, type: "button", children: "Salvar" }) })] }));
};
export default ViewHome;
//# sourceMappingURL=view.js.map