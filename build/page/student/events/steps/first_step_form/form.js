import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { convertWhatsappTextToHtml } from "@/utils/formarter";
import { EditFirstStepEvent } from "../../edit_modals/first_step_event";
import { EditPageDescription } from "../../edit_modals/page_description";
const Form = ({ question, setQuestion }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const handleOpenEditPageDescription = () => {
        setTitle("Editar Eventos");
        setComponent(_jsx(EditPageDescription, { question: question, setQuestion: setQuestion }));
        setIsVisible(true);
    };
    const handleOpenEditEventInfo = (question) => {
        setTitle(`Editar ${question?.question}`);
        setComponent(_jsx(EditFirstStepEvent, { question: question, setQuestion: setQuestion }));
        setIsVisible(true);
    };
    const events = question?.childrens?.slice(0, -3);
    return (_jsxs(_Fragment, { children: [_jsxs(S.DescriptionContainer, { children: [_jsx("div", { dangerouslySetInnerHTML: { __html: question.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditPageDescription, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsx(S.ContainerCards, { children: events?.map((child, index) => (_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: index + 1 }), _jsx("span", { children: child.question })] }), _jsx(S.Title, { dangerouslySetInnerHTML: { __html: convertWhatsappTextToHtml(child.title) } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: () => handleOpenEditEventInfo(child), children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }, child.id))) })] }));
};
export default Form;
//# sourceMappingURL=form.js.map