import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { EditPageDescription } from "../../edit_modals/page_description";
import { EditQuestionItem } from "../../edit_modals/question_item";
function QuestionItem({ item, index }) {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [question, setQuestion] = useState(item);
    const handleEditQuestion = () => {
        setTitle(`Editar ${item?.question}`);
        setComponent(_jsx(EditQuestionItem, { question: question, setQuestion: setQuestion, index: index }));
        setIsVisible(true);
    };
    return (_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: Number(index) + 1 }), _jsx(S.QuestionTitle, { dangerouslySetInnerHTML: { __html: question.question } })] }), _jsx(S.Title, { dangerouslySetInnerHTML: { __html: question.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleEditQuestion, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }));
}
const Form = ({ question, setQuestion }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const childrens = [question.childrens[0], question.childrens[1]];
    const handleOpenEditTitleModal = () => {
        setTitle("Editar Corpos Docentes e Discentes");
        setComponent(_jsx(EditPageDescription, { question: question, setQuestion: setQuestion }));
        setIsVisible(true);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(S.DescriptionContainer, { children: [question.title && _jsx("div", { dangerouslySetInnerHTML: { __html: question.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditTitleModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsx(S.ContainerCards, { children: childrens.map((child, index) => (_jsx(QuestionItem, { item: child, index: index }, child.id))) })] }));
};
export default Form;
//# sourceMappingURL=form.js.map