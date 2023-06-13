import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/button";
import * as Private from "@/routes/paths/paths.private";
import { BsFillTrashFill, BsPencil, BsPlusLg, BsSearch } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
const Comunications = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    function handleToNewForm() {
        navigate(`${pathname}/new-comunication`);
    }
    const handleBackNavigation = () => navigate(Private.EGRESS_PATH());
    return (_jsxs(S.Container, { children: [_jsxs(S.Header, { children: [_jsxs(S.SearchContainer, { children: [_jsx(S.Input, { type: "text", placeholder: "Pesquisar" }), _jsx(Button, { type: "button", children: _jsx("span", { children: _jsx(BsSearch, { size: 16 }) }) })] }), _jsxs(S.ButtonGroup, { children: [_jsx(Button, { type: "button", onClick: handleToNewForm, children: _jsxs("span", { children: [_jsx(BsPlusLg, { size: 16 }), "Novo Formul\u00E1rio"] }) }), _jsx(Button, { type: "button", outline: true, onClick: handleBackNavigation, children: _jsx("span", { children: "Voltar" }) })] })] }), _jsx(S.FormList, { children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "T\u00EDtulo" }), _jsx("th", { children: "Enviado para" }), _jsx("th", {})] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: "Produtos Acad\u00EAmicos" }), _jsx("td", { children: "Doutor" }), _jsxs(S.Actions, { children: [_jsx(S.Button, { children: _jsx(BsPencil, { size: 20 }) }), _jsx(S.Button, { children: _jsx(FiSend, { size: 20 }) }), _jsx(S.Button, { isDelete: true, children: _jsx(BsFillTrashFill, { size: 20 }) })] })] }), _jsxs("tr", { children: [_jsx("td", { children: "Vida Profissional" }), _jsx("td", { children: "Doutor, Mestre" }), _jsxs(S.Actions, { children: [_jsx(S.Button, { children: _jsx(BsPencil, { size: 20 }) }), _jsx(S.Button, { children: _jsx(FiSend, { size: 20 }) }), _jsx(S.Button, { isDelete: true, children: _jsx(BsFillTrashFill, { size: 20 }) })] })] }), _jsxs("tr", { children: [_jsx("td", { children: "Envolvimento no ensino" }), _jsx("td", { children: "Doutor" }), _jsxs(S.Actions, { children: [_jsx(S.Button, { children: _jsx(BsPencil, { size: 20 }) }), _jsx(S.Button, { children: _jsx(FiSend, { size: 20 }) }), _jsx(S.Button, { isDelete: true, children: _jsx(BsFillTrashFill, { size: 20 }) })] })] })] })] }) })] }));
};
export default Comunications;
//# sourceMappingURL=comunications.js.map