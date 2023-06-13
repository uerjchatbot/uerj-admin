import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as ButtonComponent } from "@/components/button";
import * as Private from "@/routes/paths/paths.private";
import { FormService } from "@/services/form/form.service";
import { Button } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { BsEye, BsPlusLg, BsSearch } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
const Forms = () => {
    const { state } = useLocation();
    const [forms, setForms] = React.useState([]);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    function handleToNewForm() {
        navigate(`${pathname}/new-form`, {
            state
        });
    }
    const getForms = useCallback(async () => {
        try {
            const { data } = await FormService.list(state.id);
            setForms(data.forms);
        }
        catch (error) {
            console.error(error);
        }
    }, [state.id, setForms]);
    useEffect(() => {
        getForms();
    }, [getForms, state.id]);
    const handleBackNavigation = () => navigate(Private.EGRESS_PATH(), {
        state
    });
    return (_jsxs(S.Container, { children: [_jsxs(S.Header, { children: [_jsxs(S.SearchContainer, { children: [_jsx(S.Input, { type: "text", placeholder: "Pesquisar" }), _jsx(ButtonComponent, { type: "button", children: _jsx("span", { children: _jsx(BsSearch, { size: 16 }) }) })] }), _jsxs(S.ButtonGroup, { children: [_jsx(ButtonComponent, { type: "button", onClick: handleToNewForm, children: _jsxs("span", { children: [_jsx(BsPlusLg, { size: 16 }), "Novo Formul\u00E1rio"] }) }), _jsx(ButtonComponent, { type: "button", outline: true, onClick: handleBackNavigation, children: _jsx("span", { children: "Voltar" }) })] })] }), _jsx(S.FormList, { children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Modelo" }), _jsx("th", {})] }) }), _jsx("tbody", { children: forms.length > 0 &&
                                forms?.map((form) => (_jsxs("tr", { children: [_jsx("td", { children: form.title }), _jsxs(S.Actions, { children: [_jsx("a", { href: form.form_url, target: "_blank", rel: "noreferrer", children: _jsx(Button, { variant: "contained", color: "primary", size: "large", children: _jsx(BsEye, { size: 22 }) }) }), _jsx(Button, { variant: "contained", color: "secondary", children: _jsx(FiSend, { size: 22 }) })] })] }, form.id))) })] }) })] }));
};
export default Forms;
//# sourceMappingURL=forms.js.map