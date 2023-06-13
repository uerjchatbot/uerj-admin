import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditQuestion } from "../../edit-modals/edit-question";
import { EditHomeTitle } from "../../edit-modals/edit-title";
const Form = ({ question, setQuestion }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const handleEditHomeTitle = () => {
        setTitle(`Editar Instruções e tutoriais`);
        setComponent(_jsx(EditHomeTitle, { question: question, setQuestion: setQuestion }));
        setIsVisible(true);
    };
    const handleOpenEditQuestionModal = (question) => {
        setTitle(`Editar ${question.question}`);
        setComponent(_jsx(EditQuestion, { question: question, setQuestion: setQuestion }));
        setIsVisible(true);
    };
    const tutorials = question?.childrens?.slice(0, -4);
    return (_jsxs(S.Container, { children: [_jsxs(S.Header, { children: [_jsx("p", { dangerouslySetInnerHTML: { __html: question.title } }), _jsx("div", { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleEditHomeTitle, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), tutorials.map((child, index) => (_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: index + 1 }), _jsx("span", { children: child?.question })] }), _jsx("div", { children: _jsx("p", { dangerouslySetInnerHTML: { __html: child?.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: () => handleOpenEditQuestionModal(child), children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }, child.id)))] }));
};
export default Form;
//# sourceMappingURL=form.js.map