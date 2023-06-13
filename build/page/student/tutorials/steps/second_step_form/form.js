import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditQuestion } from "../../edit-modals/edit-question";
const Form = ({ question, setQuestion }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const handleOpenEditQuestionModal = (question) => {
        setTitle(`Editar ${question.question}`);
        setComponent(_jsx(EditQuestion, { question: question, setQuestion: setQuestion }));
        setIsVisible(true);
    };
    const tutorials = question?.childrens?.slice(3);
    return (_jsx(S.Container, { children: tutorials.map((child, index) => (_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: index + 4 }), _jsx("span", { children: child?.question })] }), _jsx("div", { children: _jsx("p", { dangerouslySetInnerHTML: { __html: child?.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: () => handleOpenEditQuestionModal(child), children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }, child.id))) }));
};
export default Form;
//# sourceMappingURL=form.js.map