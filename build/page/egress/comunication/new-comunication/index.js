import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/button";
import * as Private from "@/routes/paths/paths.private";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
const NewComunication = () => {
    const navigate = useNavigate();
    const handleBackNavigation = () => navigate(Private.EGRESS_FORMS());
    return (_jsxs(S.Container, { children: [_jsx(S.Header, { children: _jsxs(S.ButtonGroup, { children: [_jsx(Button, { type: "button", children: _jsxs("span", { children: [_jsx(AiOutlineCheck, { size: 16 }), "Salvar Formul\u00E1rio"] }) }), _jsx(Button, { type: "button", outline: true, onClick: handleBackNavigation, children: _jsx("span", { children: "Voltar" }) })] }) }), _jsx(S.BoxForm, { children: _jsx(S.FormTitle, { placeholder: "T\u00EDtulo da comunica\u00E7\u00E3o" }) }), _jsx(S.BoxForm, { children: _jsx(S.FormContent, { placeholder: "Comunica\u00E7\u00E3o" }) })] }));
};
export default NewComunication;
//# sourceMappingURL=index.js.map