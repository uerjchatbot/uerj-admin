import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditDiscretionQuestion } from "../../edit-modals/discretion";
import { EditDocumentationQuestion } from "../../edit-modals/documentation";
import { EditEnrollmentQuestion } from "../../edit-modals/enrollment";
import { EditStepQuestion } from "../../edit-modals/step";
const Form = ({ data }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [documentation, setDocumentation] = useState(data?.documentation);
    const [step, setStep] = useState(data?.steps);
    const [discretion, setDiscretion] = useState(data?.discretion);
    const [enrollment, setEnrollment] = useState(data?.enrollment);
    const handleOpenEditDocumentationQuestionModal = () => {
        setTitle(`Editar ${documentation.question}`);
        setComponent(_jsx(EditDocumentationQuestion, { setDocumentation: setDocumentation, documentation: documentation }));
        setIsVisible(true);
    };
    const handleOpenEditDiscretionQuestionModal = () => {
        setTitle(`Editar ${discretion?.question}`);
        setComponent(_jsx(EditDiscretionQuestion, { discretion: discretion, setDiscretion: setDiscretion }));
        setIsVisible(true);
    };
    const handleOpenEditStepQuestionModal = () => {
        setTitle(`Editar ${step?.question}`);
        setComponent(_jsx(EditStepQuestion, { step: step, setStep: setStep }));
        setIsVisible(true);
    };
    const handleOpenEditEnrollmentQuestionModal = () => {
        setTitle(`Editar ${enrollment?.question}`);
        setComponent(_jsx(EditEnrollmentQuestion, { enrollment: enrollment, setEnrollment: setEnrollment }));
        setIsVisible(true);
    };
    return (_jsx(_Fragment, { children: _jsxs(S.ContainerCards, { children: [_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "5" }), documentation && _jsx("span", { children: documentation.question })] }), _jsx("p", { dangerouslySetInnerHTML: { __html: documentation.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditDocumentationQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "6" }), step && _jsx("span", { children: step.question })] }), _jsx("p", { dangerouslySetInnerHTML: { __html: (step && step.title) || "Um texto aqui" } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditStepQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "7" }), discretion && _jsx("span", { children: discretion.question })] }), _jsx("p", { dangerouslySetInnerHTML: {
                                __html: (discretion && discretion.title) || "Um texto Aqui"
                            } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditDiscretionQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "8" }), enrollment && _jsx("span", { children: enrollment.question })] }), _jsx("p", { dangerouslySetInnerHTML: {
                                __html: (enrollment && enrollment.title) || "Um texto aqui"
                            } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditEnrollmentQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] })] }) }));
};
export default Form;
//# sourceMappingURL=form.js.map