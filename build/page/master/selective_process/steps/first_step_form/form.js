import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditNoticeQuestion } from "../../edit-modals/notice";
import { EditQuotasQuestion } from "../../edit-modals/quotas";
import { EditRegistrationQuestion } from "../../edit-modals/registration";
import { EditVacanciesQuestion } from "../../edit-modals/vacancies";
const Form = ({ data }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [notice, setNotice] = useState(data?.notice);
    const [quotas, setQuotas] = useState(data?.quotas);
    const [registration, setRegistration] = useState(data?.registration);
    const [vacancies, setVacancies] = useState(data?.vacancies);
    const handleOpenEditVacanciesQuestionModal = () => {
        setTitle(`Editar ${vacancies.question}`);
        setComponent(_jsx(EditVacanciesQuestion, { vacancies: vacancies, setVacancies: setVacancies }));
        setIsVisible(true);
    };
    const handleOpenEditNoticeQuestionModal = () => {
        setTitle(`Editar ${notice.question}`);
        setComponent(_jsx(EditNoticeQuestion, { setNotice: setNotice, notice: notice }));
        setIsVisible(true);
    };
    const handleOpenEditQuotasQuestionModal = () => {
        setTitle(`Editar ${quotas?.question}`);
        setComponent(_jsx(EditQuotasQuestion, { quotas: quotas, setQuotas: setQuotas }));
        setIsVisible(true);
    };
    const handleOpenEditRegistrationQuestionModal = () => {
        setTitle(`Editar ${registration?.question}`);
        setComponent(_jsx(EditRegistrationQuestion, { registration: registration, setRegistration: setRegistration }));
        setIsVisible(true);
    };
    return (_jsx(_Fragment, { children: _jsxs(S.ContainerCards, { children: [_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "1" }), notice && _jsx("span", { children: notice.question })] }), _jsx("p", { dangerouslySetInnerHTML: { __html: notice.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditNoticeQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "2" }), vacancies && _jsx("span", { children: vacancies.question })] }), _jsx(S.FlexRowCard, { children: _jsx("p", { dangerouslySetInnerHTML: { __html: vacancies.title } }) }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditVacanciesQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "3" }), quotas && _jsx("span", { children: quotas.question })] }), _jsx("p", { dangerouslySetInnerHTML: { __html: quotas.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditQuotasQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "4" }), registration && _jsx("span", { children: registration.question })] }), _jsx("p", { dangerouslySetInnerHTML: { __html: registration.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditRegistrationQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] })] }) }));
};
export default Form;
//# sourceMappingURL=form.js.map