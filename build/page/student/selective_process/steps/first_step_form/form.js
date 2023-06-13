import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { CardItem } from "../../cards/card-item";
import { EditQuestion } from "../../edit-modals/edit-question";
const Form = ({ setQuestion, question }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const handleEditHomeTitle = () => {
        setTitle(`Editar Processo seletivo de bolsas`);
        setComponent(_jsx(EditQuestion, { question: question, setQuestion: setQuestion }));
        setIsVisible(true);
    };
    const childrens = [question?.childrens[0]];
    return (_jsxs(S.Container, { children: [_jsxs(S.Header, { children: [_jsx("p", { dangerouslySetInnerHTML: { __html: question.title } }), _jsx("div", { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleEditHomeTitle, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), childrens?.map((child, index) => (_jsx(CardItem, { question: child, index: index + 1 }, child.id)))] }));
};
export default Form;
//# sourceMappingURL=form.js.map