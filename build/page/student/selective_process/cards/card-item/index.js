import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { EditQuestion } from "../../edit-modals/edit-question";
import { CartChildItem } from "../card-child-item";
import * as S from "./styles";
export const CardItem = ({ question, index }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [child, setChild] = useState({});
    const getData = async () => {
        try {
            const { data } = await QuestionServices.getQuestion(question);
            setChild(data);
        }
        catch (error) {
            console.log("error:", error);
        }
    };
    const handleOpenEditQuestionModal = (question) => {
        setTitle(`Editar ${question.question}`);
        setComponent(_jsx(EditQuestion, { question: question, setQuestion: setChild }));
        setIsVisible(true);
    };
    useEffect(() => {
        getData();
    }, []);
    return (_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: index }), _jsx("span", { dangerouslySetInnerHTML: { __html: child.question } })] }), _jsx("div", { children: _jsx("p", { dangerouslySetInnerHTML: { __html: child.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: () => handleOpenEditQuestionModal(child), children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }), child?.childrens?.map((c, indexc) => (_jsx(CartChildItem, { index: indexc, question: c }, c.id)))] }));
};
//# sourceMappingURL=index.js.map