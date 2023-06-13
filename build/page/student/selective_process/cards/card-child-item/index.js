import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { EditQuestion } from "../../edit-modals/edit-question";
import * as S from "./styles";
export const CartChildItem = ({ question, index }) => {
    const [child, setChild] = useState({});
    const { setTitle, setComponent, setIsVisible } = useModal();
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
    return (_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsxs("span", { children: [index + 1, "."] }), _jsx("p", { dangerouslySetInnerHTML: { __html: child?.question } })] }), _jsx("div", { children: _jsx("p", { dangerouslySetInnerHTML: { __html: child?.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: () => handleOpenEditQuestionModal(child), children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }));
};
//# sourceMappingURL=index.js.map